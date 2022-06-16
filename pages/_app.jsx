import { Provider } from "next-auth/client"
import '../lib/Css/root.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
