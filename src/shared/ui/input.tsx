import { Eye, EyeOff } from 'lucide-react'
import * as React from 'react'
import { TIcons } from '../../types'
import { cn } from '../../utils/cn'
import { CIcon } from '../../utils/Icons'

interface InputProps extends React.ComponentProps<'input'> {
	icon?: TIcons
}

function Input({ className, type, icon, ...props }: InputProps) {
	const [showPassword, setShowPassword] = React.useState(false)
	const isPassword = type === 'password'

	return (
		<div className='relative w-full'>
			{icon && (
				<div className='pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground'>
					<CIcon name={icon} />
				</div>
			)}
			<input
				type={isPassword && showPassword ? 'text' : type}
				data-slot='input'
				className={cn(
					'file:text-foreground placeholder:text-muted-foreground selection:bg-background selection:text-primary-foreground dark:bg-background flex h-9 w-full min-w-0 rounded-md bg-background px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
					'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
					icon ? 'pl-8' : '',
					isPassword ? 'pr-10' : '',
					className
				)}
				{...props}
			/>
			{isPassword && (
				<button
					type='button'
					onClick={() => setShowPassword(prev => !prev)}
					className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300'
					tabIndex={-1}
				>
					{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
				</button>
			)}
		</div>
	)
}

export { Input }
