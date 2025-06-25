import { useQuery } from '@tanstack/react-query'
import {
	getWordsByVocabularyId,
	getWordsByVocabularyIdParams,
} from '../requests/getWordsByVocabularyId'

export const useGetWordsByVocabularyId = (
	params: getWordsByVocabularyIdParams,
	settings?: QuerySettings<typeof getWordsByVocabularyId>
) => {
	return useQuery({
		queryKey: ['GetWordsByVocabularyId', params.vocab_id],
		queryFn: () => getWordsByVocabularyId({ params, ...settings?.config }),
		select: data => data.data,
		...settings?.options,
	})
}
