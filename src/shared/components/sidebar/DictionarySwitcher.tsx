'use client'

import { ArrowLeftCircle, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { useNavigate, useParams } from 'react-router'
import $PAGES from '../../../app/routes/pages.config'
import { LanguageData } from '../../../pages/Shelf/data'
import { useGetVocabularyByUserId } from '../../../services/vocabulary/hooks/useGetVocabularyByUserId'
import { useUserStore } from '../../../stores/user.store'
import { IVocabulary } from '../../../types/vocabulary'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '../../ui/sidebar'

export function DictionarySwitcher() {
	const user = useUserStore(state => state.user)
	const dictionaries = useGetVocabularyByUserId({ userId: user.id })
	const { isMobile } = useSidebar()
	const [activeTeam, setActiveTeam] = React.useState({} as IVocabulary)
	const parms = useParams()
	const path = useNavigate()

	const getActiveDictionary = (lang_code: string) => {
		return dictionaries.data?.find(i => i.code === lang_code)
	}

	const getFlag = () => {
		const lang = parms.lang_code ?? 'en'
		const langData = LanguageData.filter(i => i.Language === lang)
		if (langData) return langData[0].Flag
	}

	const goToDictionary = (code: string, id: number) => {
		path($PAGES.makeDictionary(code, id))
	}

	React.useEffect(() => {
		const lang = parms.lang_code ?? 'en'
		const activeDictionary = getActiveDictionary(lang)
		if (activeDictionary) {
			setActiveTeam(activeDictionary)
		}
	}, [dictionaries])

	if (!activeTeam) {
		return null
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size='lg'
							className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
						>
							<div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 text-xl items-center justify-center rounded-lg'>
								{getFlag()}
							</div>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-medium'>{activeTeam.name}</span>
								<span className='truncate text-xs'>{activeTeam.code}</span>
							</div>
							<ChevronsUpDown className='ml-auto' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
						align='start'
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className='text-muted-foreground text-xs'>
							Dictionaries
						</DropdownMenuLabel>
						{dictionaries.data?.map((team, index) => (
							<DropdownMenuItem
								key={index}
								onClick={() => goToDictionary(team.code, team.id)}
								className='gap-2 p-2'
							>
								{/* <div className='flex size-6 items-center justify-center rounded-md border'>
									{team.code}
								</div> */}
								{team.name}
								<DropdownMenuShortcut>{team.code}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem
							className='gap-2 p-2'
							onClick={() => path($PAGES.VOCABULARIES.SHELF)}
						>
							<ArrowLeftCircle className='size-4 hover:text-black' />

							<div className=' hover:text-black font-medium'>
								Go to your shelf
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
