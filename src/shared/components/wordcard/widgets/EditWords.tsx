import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useEditWord } from '../../../../services/words/hooks/useEditWord'
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
	const EditWord = useEditWord({
		options: {
			onSuccess: () => {
				toast.success('Word edded successfully!')
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
		EditWord.mutate({
			params: {
				id: word.id,
				word: formData.word,
				translation: translationsArray,
			},
		})
	}

	useEffect(() => {
		if (data) {
			reset({
				word: data.word,
				translation: data.translate.join(', '),
			})
		}
	}, [data, reset])

	return (
		<Sheet>
			<SheetTrigger>
				<WordCard {...word} />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>EditWord</SheetTitle>
					<SheetDescription>
						You can enter the translation separated by commas.
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
								{errors.word && (
									<span className='text-red-500'>
										{errors.word.message || 'This field is required.'}
									</span>
								)}
							</div>
							<div className='grid gap-3'>
								<Label>Translation</Label>
								<Input
									className='bg-black'
									placeholder='Translation...'
									defaultValue={data?.translate.join(', ')}
									{...register('translation')}
								/>
								{errors.translation && (
									<span className='text-red-500'>
										{errors.translation.message || 'This field is required.'}
									</span>
								)}
							</div>
						</div>

						<SheetFooter className='absolute bottom-1 w-full'>
							<Button type='submit' className='cursor-pointer'>
								Save
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
