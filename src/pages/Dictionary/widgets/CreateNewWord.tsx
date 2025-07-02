import { Plus } from 'lucide-react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { toast } from 'sonner'
import { useAddNewWord } from '../../../services/words/hooks/useAddNewWord'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Label } from '../../../shared/ui/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../../../shared/ui/sheet'

const CreateNewWord = ({ refetch }: { refetch: () => void }) => {
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
			word: '',
			translation: '',
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
				<Button
					asChild
					asEllement={'div'}
					variant={'outline'}
					className='cursor-pointer text-white'
				>
					<Plus />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Add new word</SheetTitle>
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

export default CreateNewWord
