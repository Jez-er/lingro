import reactLogo from '@/assets/react.svg'
import './style.css'
import HomeCounter from './widgets/counter'
import astralLogo from '/astral.svg'
import viteLogo from '/vite.svg'

function HomePage() {
	return (
		<>
			<div className='flex w-full justify-center'>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='/' target='_blank'>
					<img src={astralLogo} className='logo astral' alt='React logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + Astral + React</h1>
			<h2>
				By <a href='https://github.com/Jez-er'>Jez-er</a>
			</h2>
			<div className='card'>
				<HomeCounter />
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite, Astral and React logos to learn more
			</p>
		</>
	)
}

export default HomePage
