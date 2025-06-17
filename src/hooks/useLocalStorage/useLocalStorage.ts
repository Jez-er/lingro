import type {
	UseStorageInitialValue,
	UseStorageOptions,
} from '../useStorage/useStorage'

import { useStorage } from '../useStorage/useStorage'

export const useLocalStorage = <Value>(
	key: string,
	initialValue?: UseStorageInitialValue<Value>,
	options?: Omit<UseStorageOptions<Value>, 'initialValue' | 'storage'>
) =>
	useStorage(key, {
		...options,
		initialValue,
		storage: typeof window !== 'undefined' ? window.localStorage : undefined,
	})
