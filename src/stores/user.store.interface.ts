import { ILoginFields } from '../types'
import { IUser } from '../types/user'

export interface IUserStore {
	user: IUser
	isAuth: boolean
	login: (fields: ILoginFields) => void
	logout: () => void
}
