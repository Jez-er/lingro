import { Route, Routes } from 'react-router'
import HomePage from '../../pages/Home/Page'
import $PAGES from './pages.config'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={$PAGES.HOME} element={<HomePage />} />
		</Routes>
	)
}
