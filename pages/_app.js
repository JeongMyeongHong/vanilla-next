import '@/styles/globals.css'
import { Nav, Header, Layout, Footer} from '@/components'
import { wrapper } from '@/modules/store.js'

const App = ({ Component, pageProps }) => {
  return (<>
    <Nav/>
      <Header/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
      </>
    )
}

export default wrapper.withRedux(App)
