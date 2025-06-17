import { Languages, Plus } from 'lucide-react'
import { useGetVocabularyByUserId } from '../../services/vocabulary/hooks/useGetVocabularyByUserId'
import { useUserStore } from '../../stores/user.store'

const ShelfPage = () => {
	const user = useUserStore(state => state.user)
	const { data } = useGetVocabularyByUserId({ userId: user.id })

	console.log(data)

	return (
		<main className='w-full h-full flex flex-col px-72 pt-10'>
			<section>
				<h1 className='flex gap-1 items-center font-semibold text-3xl '>
					Please select a{' '}
					<span className='flex items-center gap-2 text-accent'>
						dictionary <Languages />
					</span>
				</h1>
				<h2>Choose your preferred dictionary to continue.</h2>
			</section>
			<section>
				<div className='flex flex-wrap gap-4 mt-10'>
					{data?.map((data, index) => (
						<div
							key={index}
							className='w-52 h-24 flex items-center justify-center  bg-neutral-800 text-white px-4 py-2 rounded-md text-center hover:text-accent hover:border border-accent duration-300 transition-all'
						>
							<div>
								<h1 className='font-semibold'>{data.name}</h1>
								<h2>({data.code.toUpperCase()})</h2>
							</div>
						</div>
					))}

					<button className='bg-transparent border duration-300 transition-all border-neutral-600 text-white w-52 h-24 rounded-md flex items-center justify-center text-center cursor-pointer hover:text-accent hover:border-accent'>
						<div className='p-3 rounded-full bg-neutral-800'>
							<Plus />
						</div>
					</button>
				</div>
			</section>
		</main>
	)
}

export default ShelfPage
