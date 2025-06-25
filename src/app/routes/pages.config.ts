const $PAGES = {
	HOME: '/',
	AUTH: {
		index: '/auth',
		LOGIN: '/auth/login',
		REGISTRATION: '/auth/registration',
	},
	VOCABULARIES: {
		SHELF: '/shelf',
		DICTIONARY: '/dictionary',
	},
	makeDictionary(lang_code: string, vocab_id: number) {
		return `${this.VOCABULARIES.DICTIONARY}/${lang_code}/${vocab_id}`
	},
}

export default $PAGES
