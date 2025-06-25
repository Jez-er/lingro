import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { toast } from 'sonner'
import { useAddNewWord } from '../../../../services/words/hooks/useAddNewWord'
import { useGetWordById } from '../../../../services/words/hooks/useGetWordById'
import { IWord } from '../../../../types/words'
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../../../ui/sheet'
import WordCard from '../WordCard'

const EditWord = ({ refetch, word }: { refetch: () => void; word: IWord }) => {
	const { data } = useGetWordById({ id: word.id })
	const sheetCloseRef = useRef<HTMLButtonElement>(null)
	const params = useParams()
	const AddNewWord = useAddNewWord({
		options: {
			onSuccess: () => {
				toast.success('New word added successfully!')
				sheetCloseRef.current?.click()
				refetch()
				reset()
			},
		},
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			word: data?.word || '',
			translation: data?.translate.join(', ') || '',
		},
	})

	const onSubmit = (formData: { word: string; translation: string }) => {
		const translationsArray = formData.translation
			.split(',')
			.map(t => t.trim())
			.filter(t => t.length > 0)
		AddNewWord.mutate({
			params: {
				vovabularyId: params.vocab_id ? Number(params.vocab_id) : 0,
				word: formData.word,
				translation: translationsArray,
			},
		})
	}

	return (
		<Sheet>
			<SheetTrigger>
				<div>
					<WordCard {...word} />
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Add new word</SheetTitle>
					<SheetDescription>
						Select the language for which you want to create a dictionary.
					</SheetDescription>
				</SheetHeader>

				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='grid flex-1 auto-rows-min gap-6 px-4'>
							<div className='grid gap-3'>
								<Label>Word</Label>
								<Input
									className='bg-black'
									placeholder='Word...'
									defaultValue={data?.word}
									{...register('word')}
								/>
							</div>
							<div className='grid gap-3'>
								<Label>Translation</Label>
								<Input
									className='bg-black'
									placeholder='Translation...'
									defaultValue={data?.translate.join(', ')}
									{...register('translation')}
								/>
							</div>
						</div>

						<SheetFooter className='absolute bottom-1 w-full'>
							<Button type='submit' className='cursor-pointer'>
								Add word
							</Button>
							<SheetClose asChild>
								<Button
									ref={sheetCloseRef}
									variant='outline'
									className='cursor-pointer'
								>
									Close
								</Button>
							</SheetClose>
						</SheetFooter>
					</form>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default EditWord
