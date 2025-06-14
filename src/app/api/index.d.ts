type AxiosRequestConfig<Params = undefined> = Params extends undefined
	? { config?: import('axios').AxiosRequestConfig }
	: { params: Params; config?: import('axios').AxiosRequestConfig }

interface MutationSettings<Params = void, Func = unknown> {
	config?: ApiRequestConfig
	options?: import('@tanstack/react-query').UseMutationOptions<
		Awaited<ReturnType<Func>>,
		unknown,
		Params,
		unknown
	>
}

interface QuerySettings<Func = unknown> {
	config?: AxiosRequestConfig
	options?: Omit<
		UseQueryOptions<
			Awaited<ReturnType<Func>>,
			Error,
			Awaited<ReturnType<Func>>,
			[string]
		>,
		'queryKey'
	>
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Params = undefined> = Params extends undefined
	? { config?: ApiRequestConfig }
	: { params: Params; config?: ApiRequestConfig }
