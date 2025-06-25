import { NavLink, Outlet } from 'react-router'
import $PAGES from '../app/routes/pages.config'
import { IcBaselineDiscord } from '../assets/DiscordLogo'
import { MdiTelegram } from '../assets/TelegramLogo'
import { DictionarySidebar } from '../shared/components/sidebar/dictionarySideBar'
import { SidebarProvider } from '../shared/ui/sidebar'

const DictionaryLayout = () => {
	return (
		<SidebarProvider className='h-full'>
			<div className='flex w-full h-full'>
				<div className='w-64 h-full'>
					<DictionarySidebar className='h-full' />
				</div>
				<div className='flex-1 overflow-auto p-7'>
					<header className='flex items-center mb-2'>
						<div className='flex items-center gap-3 text-lg font-medium ml-auto'>
							<NavLink
								className='hover:text-accent duration-300 transition-all'
								to={$PAGES.HOME}
							>
								Home
							</NavLink>
							<NavLink
								className='hover:text-accent duration-300 transition-all'
								to={$PAGES.VOCABULARIES.SHELF}
							>
								Shelf
							</NavLink>
						</div>
						<div className='h-8 w-[2px] bg-neutral-600 mx-2' />
						<div className='flex items-center gap-3 text-lg font-medium'>
							<a
								className='hover:text-accent duration-300 transition-all'
								href=''
							>
								<IcBaselineDiscord width={32} height={32} />
							</a>
							<a
								className='hover:text-accent duration-300 transition-all'
								href=''
							>
								<MdiTelegram width={32} height={32} />
							</a>
						</div>
					</header>
					<Outlet />
				</div>
			</div>
		</SidebarProvider>
	)
}

export default DictionaryLayout
