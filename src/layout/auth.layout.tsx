import { Outlet } from 'react-router'

const AuthLayout = () => {
	return (
		<main className='bg-background flex h-full text-center w-full justify-center items-center'>
			<Outlet />
		</main>
	)
}

export default AuthLayout
