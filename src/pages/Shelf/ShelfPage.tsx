import { Languages } from 'lucide-react'
import { useNavigate } from 'react-router'
import $PAGES from '../../app/routes/pages.config'
import { useGetVocabularyByUserId } from '../../services/vocabulary/hooks/useGetVocabularyByUserId'
import { useUserStore } from '../../stores/user.store'
import CreateVocabulary from './widgets/CreateVocabulary'

const ShelfPage = () => {
	const user = useUserStore(state => state.user)
	const { data, refetch } = useGetVocabularyByUserId({
		userId: user.id,
	})

	const path = useNavigate()

	const goToDictionary = (code: string, id: number) => {
		path($PAGES.makeDictionary(code, id))
	}

	return (
		<main className='w-full h-full flex flex-col px-72 pt-10'>
			<section>
				<h1 className='flex gap-1 items-center font-semibold text-3xl '>
					Please select a{' '}
					<span className='flex items-center gap-2 text-accent'>
						dictionary <Languages />
					</span>
				</h1>
				<h2 className='flex'>Choose your preferred dictionary to continue.</h2>
			</section>
			<section>
				<div className='flex flex-wrap gap-4 mt-10'>
					{data?.map((data, index) => (
						<div
							key={index}
							onClick={() => {
								goToDictionary(data.code, data.id)
							}}
							className='w-52 h-24 flex items-center justify-center  bg-neutral-800 text-white px-4 py-2 rounded-md text-center hover:text-accent hover:border border-accent duration-300 transition-all cursor-pointer'
						>
							<div>
								<h1 className='font-semibold'>{data.name}</h1>
								<h2>({data.code.toUpperCase()})</h2>
							</div>
						</div>
					))}
					<CreateVocabulary refetch={refetch} />
				</div>
			</section>
		</main>
	)
}

export default ShelfPage
