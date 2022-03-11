import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
       <QueryClientProvider client={queryClient}>
      <Header />
    <Component {...pageProps} />
    </QueryClientProvider>

    </>
  )
 
}

export default MyApp
