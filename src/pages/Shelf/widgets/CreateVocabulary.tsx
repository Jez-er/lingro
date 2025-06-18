import { Plus } from 'lucide-react'
import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useCreateVocabulary } from '../../../services/vocabulary/hooks/useCreateVocabulary'
import { useGetVocabularyByUserId } from '../../../services/vocabulary/hooks/useGetVocabularyByUserId'
import { Button } from '../../../shared/ui/button'
import { Label } from '../../../shared/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../../shared/ui/select'
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
import { useUserStore } from '../../../stores/user.store'
import { IVocabulary } from '../../../types/vocabulary'
import { ILanguageData, LanguageData } from '../data'

const CreateVocabulary = ({ refetch }: { refetch: () => void }) => {
	const user = useUserStore(state => state.user)
	const { data } = useGetVocabularyByUserId({ userId: user.id })
	const sheetCloseRef = useRef<HTMLButtonElement>(null)
	const CreateVocabulary = useCreateVocabulary({
		options: {
			onSuccess: () => {
				toast.success('Dictionary was created')
				sheetCloseRef.current?.click()
				refetch()
				reset()
			},
		},
	})

	const userLanguages = data || []

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			languageId: '',
		},
	})

	const getAvailableLanguages = (
		allLanguages: ILanguageData[],
		existingVocabularies: IVocabulary[]
	): ILanguageData[] => {
		const usedLanguageIds = new Set(existingVocabularies.map(v => v.languageId))
		return allLanguages.filter(lang => !usedLanguageIds.has(lang.id))
	}

	const onSubmit = (formData: { languageId: string }) => {
		CreateVocabulary.mutate({
			params: { UserId: user.id, LanguageId: formData.languageId },
		})
	}

	return (
		<Sheet>
			<SheetTrigger>
				<button className='bg-transparent border duration-300 transition-all border-neutral-600 text-white w-52 h-24 rounded-md flex items-center justify-center text-center cursor-pointer hover:text-accent hover:border-accent'>
					<div className='p-3 rounded-full bg-neutral-800'>
						<Plus />
					</div>
				</button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Create new dictionary</SheetTitle>
					<SheetDescription>
						Select the language for which you want to create a dictionary.
					</SheetDescription>
				</SheetHeader>

				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='grid flex-1 auto-rows-min gap-6 px-4'>
							<div className='grid gap-3'>
								<Label>Language</Label>
								<Controller
									name='languageId'
									control={control}
									rules={{ required: 'Please select a language' }}
									render={({ field }) => (
										<Select onValueChange={field.onChange} value={field.value}>
											<SelectTrigger className='w-80'>
												<SelectValue placeholder='Language' />
											</SelectTrigger>
											<SelectContent className='w-80'>
												{getAvailableLanguages(LanguageData, userLanguages).map(
													item => (
														<SelectItem
															value={item.id.toString()}
															key={item.id}
														>
															<div className='flex items-center w-72'>
																<span>{item.Name}</span>
																<span className='ml-auto'>
																	({item.Language.toUpperCase()})
																</span>
															</div>
														</SelectItem>
													)
												)}
											</SelectContent>
										</Select>
									)}
								/>
								{errors.languageId && (
									<p className='text-red-500 text-sm'>
										{errors.languageId.message}
									</p>
								)}
							</div>
						</div>

						<SheetFooter className='absolute bottom-1 w-full'>
							<Button type='submit' className='cursor-pointer'>
								Create new dictionary
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

export default CreateVocabulary
