import { Route, Routes } from 'react-router'
import AuthLayout from '../../layout/auth.layout'
import DictionaryLayout from '../../layout/dictionary.layout'
import MainLayout from '../../layout/main.layout'
import LoginPage from '../../pages/Auth/Login/LoginPage'
import RegistrationPage from '../../pages/Auth/Registration/RegistrationPage'
import DictionaryPage from '../../pages/Dictionary/DictionaryPage'
import HomePage from '../../pages/Home/Page'
import ShelfPage from '../../pages/Shelf/ShelfPage'
import $PAGES from './pages.config'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={$PAGES.HOME} element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path={$PAGES.VOCABULARIES.SHELF} element={<ShelfPage />} />
			</Route>

			{/* Auth */}
			<Route path={$PAGES.AUTH.index} element={<AuthLayout />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='registration' element={<RegistrationPage />} />
			</Route>

			{/* Dictionary */}
			<Route
				path={$PAGES.VOCABULARIES.DICTIONARY}
				element={<DictionaryLayout />}
			>
				<Route path=':lang_code/:vocab_id' element={<DictionaryPage />} />
			</Route>
		</Routes>
	)
}
