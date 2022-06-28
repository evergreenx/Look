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

import Script from 'next/script'


const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
 
<Script id="my-script" strategy="lazyOnload" async src={"https://www.googletagmanager.com/gtag/js?id=G-H7FTYSTRS2"}/>
<Script id="my-script2" strategy="lazyOnload">
  {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H7FTYSTRS2');`}
 
</Script>
       <QueryClientProvider client={queryClient}>
      <Header />
    <Component {...pageProps} />
    </QueryClientProvider>

    </>
  )
 
}

export default MyApp
