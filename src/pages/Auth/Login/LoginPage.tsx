import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import * as z from 'zod'
import $PAGES from '../../../app/routes/pages.config'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Label } from '../../../shared/ui/label'
import { useUserStore } from '../../../stores/user.store'
import AuthLogo from '../components/AuthLogo'

const LoginPage = () => {
	const path = useNavigate()
	const loginFn = useUserStore(state => state.login)

	const LoginSchema = z.object({
		email: z.string().email("E'mail is invalid"),
		password: z.string().min(8, 'Password must be more than 8 characters'),
	})

	type LoginFields = z.infer<typeof LoginSchema>

	const onSubmit = (fields: LoginFields) => {
		loginFn(fields)
	}

	const { register, handleSubmit, formState } = useForm<LoginFields>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(LoginSchema),
	})

	const { errors } = formState

	return (
		<div>
			<AuthLogo />
			<main>
				<div className='bg-black p-5 rounded-2xl flex flex-col items-center w-auto border border-blue-50/30 z-5 relative'>
					<h2 className='text-4xl font-bold'>Sign In</h2>
					<h3 className='opacity-60 text-sm mt-2'>
						Enter your email below to sign in to your account
					</h3>
					<form onSubmit={handleSubmit(onSubmit)} className='w-80 mt-5 '>
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
							<div className='flex items-center'>
								<Label
									htmlFor='PasswordInput'
									className='text-base font-semibold ml-1 opacity-75'
								>
									Password
								</Label>
								<span className='ml-auto mr-1 opacity-75 hover:opacity-100 cursor-pointer text-base transition-all duration-300'>
									Forgot your password?
								</span>
							</div>

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
							Sign in
						</Button>
						<div className='opacity-75 hover:opacity-100 duration-300 transition-all mt-7'>
							Don't have an account?{' '}
							<span
								className='hover:text-accent cursor-pointer duration-300 transition-all'
								onClick={() => path($PAGES.AUTH.REGISTRATION)}
							>
								Sign up
							</span>
						</div>
					</form>
				</div>
			</main>
		</div>
	)
}

export default LoginPage
