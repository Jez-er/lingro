'use client'

import { Bot, Frame, PieChart, Settings2, SquareTerminal } from 'lucide-react'
import * as React from 'react'
import { useUserStore } from '../../../stores/user.store'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '../../ui/sidebar'
import { DictionarySwitcher } from './DictionarySwitcher'
import { NavMain } from './NavMain'
import { NavProjects } from './NavProjects'
import { NavUser } from './NavUser'
import { Navworkspace } from './NavWorkspace'

// This is sample data.
const data = {
	navworkspace: [
		{
			title: 'Settings',
			url: '#',
			icon: Settings2,
			items: [
				{
					title: 'General',
					url: '#',
				},
				{
					title: 'Team',
					url: '#',
				},
				{
					title: 'Billing',
					url: '#',
				},
				{
					title: 'Limits',
					url: '#',
				},
			],
		},
	],
	navMain: [
		{
			title: 'ExampleName',
			url: '#',
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: 'History',
					url: '#',
				},
				{
					title: 'Starred',
					url: '#',
				},
				{
					title: 'Settings',
					url: '#',
				},
			],
		},
		{
			title: 'ExampleName',
			url: '#',
			icon: Bot,
			items: [
				{
					title: 'Genesis',
					url: '#',
				},
				{
					title: 'Explorer',
					url: '#',
				},
				{
					title: 'Quantum',
					url: '#',
				},
			],
		},
	],
	projects: [
		{
			name: 'Words',
			url: '#',
			icon: Frame,
		},
		{
			name: 'Categories',
			url: '#',
			icon: PieChart,
		},
	],
}

export function DictionarySidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const user = useUserStore(state => state.user)

	return (
		<Sidebar collapsible='none' {...props}>
			<SidebarHeader>
				<DictionarySwitcher />
			</SidebarHeader>
			<SidebarContent>
				<NavProjects projects={data.projects} />
				<NavMain items={data.navMain} />
				<Navworkspace items={data.navworkspace} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
