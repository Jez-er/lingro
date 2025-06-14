import { Outlet } from 'react-router'

const AuthLayout = () => {
	return (
		<main className='bg-background'>
			<Outlet />
		</main>
	)
}

export default AuthLayout
