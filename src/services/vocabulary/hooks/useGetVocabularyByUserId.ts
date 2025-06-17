import { useQuery } from '@tanstack/react-query'
import {
	getVocabularyByUserId,
	GetVocabularyByUserIdParams,
} from '../requests/getVocabularyByUserId'

export const useGetVocabularyByUserId = (
	params: GetVocabularyByUserIdParams,
	settings?: QuerySettings<typeof getVocabularyByUserId>
) => {
	return useQuery({
		queryKey: ['GetVocabularyByUserID', params.userId],
		queryFn: () => getVocabularyByUserId({ params, ...settings?.config }),
		select: data => data.data,
		...settings?.options,
	})
}
