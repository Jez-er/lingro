import $PAGES from '../../../app/routes/pages.config'

interface IHeaderData {
	title: string
	link: string
}

export const headerData: IHeaderData[] = [
	{
		title: 'Home',
		link: $PAGES.HOME,
	},
	{
		title: 'About',
		link: '/about',
	},
	{
		title: 'Contact',
		link: '/contact',
	},
	{
		title: 'Blog',
		link: '/blog',
	},
]
