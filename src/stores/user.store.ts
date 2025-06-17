import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { postLogin } from '../services/auth/requests/login'
import { postLogOut } from '../services/auth/requests/logout'
import { ILoginFields } from '../types'
import { IUser } from '../types/user'
import { IUserStore } from './user.store.interface'

export const useUserStore = create<IUserStore>()(
	persist(
		set => ({
			user: {} as IUser,
			isAuth: false,
			login: async (fields: ILoginFields) => {
				const response = await postLogin({ data: fields })
				set({
					user: response.data.user,
					isAuth: true,
				})
			},
			logout: async () => {
				postLogOut()
				set({
					user: {} as IUser,
					isAuth: false,
				})
			},
		}),
		{
			name: 'userStore',
		}
	)
)
