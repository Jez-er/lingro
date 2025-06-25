import { useParams } from 'react-router'
import { IcBooks } from '../../assets/Books'
import { useGetWordsByVocabularyId } from '../../services/words/hooks/useGetWordsByVocabularyId'
import EditWord from '../../shared/components/wordcard/widgets/EditWords'
import CreateNewWord from './widgets/CreateNewWord'

const DictionaryPage = () => {
	const parms = useParams()
	const VocabId = parms.vocab_id
	const { data, refetch } = useGetWordsByVocabularyId({
		vocab_id: Number(VocabId),
	})

	return (
		<main>
			<div className='flex'>
				<div>
					<h1 className='flex items-center gap-1 text-4xl font-semibold text-accent'>
						Dictionary
						<IcBooks />
					</h1>
					<h2 className='text-neutral-500 '>
						On this page, you can write and edit words.
					</h2>
				</div>
				<div className='mt-auto ml-auto'>
					<CreateNewWord refetch={refetch} />
				</div>
			</div>

			<div className='flex flex-wrap gap-5 mt-7'>
				{data?.map(word => (
					<EditWord word={word} refetch={refetch} key={word.id} />
				))}
			</div>
		</main>
	)
}
export default DictionaryPage
