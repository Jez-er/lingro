import { IWord } from '../../../types/words'
import { cn } from '../../../utils'
import { Badge } from '../../ui/badge'

const WordCard = (data: IWord) => {
	return (
		<div className='w-[19rem] h-28 p-3 rounded-xl bg-black relative hover:border-accent transition-all duration-300 cursor-pointer border border-transparent flex flex-col'>
			<h1 className='font-semibold text-xl flex items-center'>
				{data.word}{' '}
				<Badge
					className={cn(
						'ml-auto',
						data.variant === 'new'
							? 'bg-green-600'
							: data.variant === 'learning'
							? 'bg-orange-500'
							: data.variant === 'master'
							? 'bg-accent'
							: 'bg-green-600'
					)}
				>
					{data.variant}
				</Badge>
			</h1>
			<p className='break-words line-clamp-2'>{data.translate.join(',')}</p>
			<div className='ml-auto flex gap-1 opacity-50 items-center text-sm absolute bottom-1 right-3'>
				Scores:
				{data.variant === 'new' ? (
					<div>{data.scores}/50</div>
				) : data.variant === 'learning' ? (
					<div>{data.scores}/150</div>
				) : data.variant === 'master' ? (
					<div>150/150</div>
				) : (
					<div>0/0</div>
				)}
			</div>
		</div>
	)
}

export default WordCard
