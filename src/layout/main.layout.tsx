import { Outlet } from 'react-router'
import Header from '../shared/components/header'

const MainLayout = () => {
	return (
		<main className='bg-background h-full text-center w-full'>
			<Header />
			<Outlet />
		</main>
	)
}

export default MainLayout
