import { useQuery } from '@tanstack/react-query'
import { getWordById, getWordByIdParams } from '../requests/getWordById'

export const useGetWordById = (
	params: getWordByIdParams,
	settings?: QuerySettings<typeof getWordById>
) => {
	return useQuery({
		queryKey: ['getWordById', params.id],
		queryFn: () => getWordById({ params, ...settings?.config }),
		select: data => data.data,
		...settings?.options,
	})
}
