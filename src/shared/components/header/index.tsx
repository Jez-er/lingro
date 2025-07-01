import { NavLink, useNavigate } from 'react-router'
import $PAGES from '../../../app/routes/pages.config'
import { useUserStore } from '../../../stores/user.store'
import { Button } from '../../ui/button'
import { headerData } from './data'
import logo from '/logo.svg'

const Header = () => {
	const path = useNavigate()
	const isAuth = useUserStore(state => state.isAuth)

	return (
		<header className='w-full h-16 border-b-2 border-neutral-500 flex items-center px-64'>
			<div
				onClick={() => path($PAGES.HOME)}
				className='flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer'
			>
				<img
					src={logo}
					alt='logo'
					width={32}
					className='relative z-10 scale-250'
				/>
				<h1 className='text-2xl font-semibold'>Lingro</h1>
			</div>
			<div className='flex items-center gap-8 mx-auto'>
				{headerData.map((item, index) => (
					<NavLink
						className={
							'hover:text-accent transition-all duration-300 font-semibold'
						}
						to={item.link}
						key={index}
					>
						{item.title}
					</NavLink>
				))}
			</div>
			<div>
				<Button
					variant={'outline'}
					size={'lg'}
					className='rounded-xl px-10 font-semibold cursor-pointer'
					onClick={() => {
						if (isAuth) {
							path($PAGES.VOCABULARIES.SHELF)
						} else {
							path($PAGES.AUTH.LOGIN)
						}
					}}
				>
					Shelf
				</Button>
			</div>
		</header>
	)
}

export default Header
