import { Route, Routes } from 'react-router'
import AuthLayout from '../../layout/auth.layout'
import LoginPage from '../../pages/Auth/Login/LoginPage'
import RegistrationPage from '../../pages/Auth/Registration/RegistrationPage'
import HomePage from '../../pages/Home/Page'
import ShelfPage from '../../pages/Shelf/ShelfPage'
import $PAGES from './pages.config'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={$PAGES.HOME} element={<HomePage />} />
			// Auth
			<Route path={$PAGES.AUTH.index} element={<AuthLayout />}>
				<Route path={$PAGES.AUTH.LOGIN} element={<LoginPage />} />
				<Route path={$PAGES.AUTH.REGISTRATION} element={<RegistrationPage />} />
			</Route>
			// Shelf
			<Route path={$PAGES.VOCABULARIES.SHELF} element={<ShelfPage />} />
		</Routes>
	)
}
