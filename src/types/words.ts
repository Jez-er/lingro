export type TWordVariant = 'new' | 'learning' | 'master'

export interface IWord {
	id: number
	scores: number
	word: string
	translate: string[]
	variant: TWordVariant
}
