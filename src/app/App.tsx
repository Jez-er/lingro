import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { AppRoutes } from './routes/router'

function App() {
	const queryClient = new QueryClient()

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
				<Toaster />
			</QueryClientProvider>
		</>
	)
}

export default App
