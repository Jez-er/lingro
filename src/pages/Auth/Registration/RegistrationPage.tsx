import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'
import $PAGES from '../../../app/routes/pages.config'
import { useRegistration } from '../../../services/auth/hooks/useRegistration'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Label } from '../../../shared/ui/label'
import AuthLogo from '../components/AuthLogo'

const RegistrationPage = () => {
	const path = useNavigate()
	const { mutate } = useRegistration({
		options: {
			onSuccess: () => {
				toast('Register success!')
				path($PAGES.AUTH.LOGIN)
			},
		},
	})

	const RegistrationSchema = z.object({
		name: z
			.string()
			.min(3, 'Name must be more than 3 characters')
			.max(16, 'Name must be less than 16 characters'),
		email: z.string().email("E'mail is invalid"),
		password: z.string().min(8, 'Password must be more than 8 characters'),
	})

	type RegistrationFields = z.infer<typeof RegistrationSchema>

	const onSubmit = (fields: RegistrationFields) => {
		mutate({ params: { data: fields } })
	}

	const { register, handleSubmit, formState } = useForm<RegistrationFields>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(RegistrationSchema),
	})

	const { errors } = formState

	return (
		<div>
			<AuthLogo />
			<main>
				<div className='bg-black p-5 rounded-2xl flex flex-col items-center w-auto border border-blue-50/30 z-5 relative'>
					<h2 className='text-4xl font-bold'>Sign Up</h2>
					<h3 className='opacity-60 text-sm mt-2'>
						Enter your email below to create new account
					</h3>
					<form className='w-80 mt-5' onSubmit={handleSubmit(onSubmit)}>
						<div className='w-full mb-5'>
							<Label
								htmlFor='NameInput'
								className='text-base font-semibold ml-1 opacity-75'
							>
								Name
							</Label>
							<Input
								id='NameInput'
								type='Name'
								icon='UserRound'
								placeholder='Name'
								{...register('name')}
							/>
							<span className='text-red-700'>{errors.name?.message}</span>
						</div>
						<div className='w-full mb-5'>
							<Label
								htmlFor='EmailInput'
								className='text-base font-semibold ml-1 opacity-75'
							>
								E-Mail
							</Label>
							<Input
								id='EmailInput'
								type='email'
								icon='Mail'
								placeholder='E-mail'
								{...register('email')}
							/>
							<span className='text-red-700'>{errors.email?.message}</span>
						</div>
						<div className='w-full'>
							<Label
								htmlFor='PasswordInput'
								className='text-base font-semibold ml-1 opacity-75'
							>
								Password
							</Label>

							<Input
								id='PasswordInput'
								type='password'
								icon='Lock'
								placeholder='Password'
								{...register('password')}
							/>

							<span className='text-red-700'>{errors.password?.message}</span>
						</div>
						<Button
							variant={'outline'}
							className='mt-10 px-14 py-5 font-semibold text-base rounded-2xl duration-300 transition-all'
						>
							Sign up
						</Button>
						<div className='opacity-75 hover:opacity-100 duration-300 transition-all mt-7'>
							Aleardy have an account?{' '}
							<span
								className='hover:text-accent cursor-pointer duration-300 transition-all'
								onClick={() => path($PAGES.AUTH.LOGIN)}
							>
								Sign in
							</span>
						</div>
					</form>
				</div>
			</main>
		</div>
	)
}

export default RegistrationPage
