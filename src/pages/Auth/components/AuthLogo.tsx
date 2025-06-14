import logo from '/logo.svg'

const AuthLogo = () => {
	return (
		<div className='relative flex flex-col items-center mb-8'>
			<div className='relative z-2'>
				<img
					src={logo}
					alt='logo'
					width={82}
					height={82}
					className='relative z-10 scale-200'
				/>
			</div>
			<h1 className='text-3xl font-bold text-white mt-4 z-2'>Lingro Account</h1>
			<div className=' absolute h-36 w-full -bottom-15 z-1'>
				<div className='absolute inset-0 z-0 rounded-full blur-2xl bg-accent opacity-40' />
			</div>
		</div>
	)
}

export default AuthLogo
