import type { AppProps } from 'next/app'

import FetchAppData from '../source/components/auth/FetchAppData';

import BigWrapper from '../source/components/general/BigWrapper';

import NextjsProgressbar from 'nextjs-progressbar'

import GlobalStyles from '../source/components/general/GlobalStyles'

import store from '../source/store/store'

import { useEffect } from 'react'

import { Provider } from 'react-redux'

import { processCookies } from '../source/controllers/GeneralCtrl'

import { siteThemeColor } from '../source/__env'

import Message from '../source/controllers/Messages/Message'

import Loader from '../source/controllers/Loaders/Loader'

import ElpisTheme from '../source/theme/ElpisTheme'

import ConfigureQuery from '../source/components/general/ConfigureQuery';

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';



const MyApp = ({ Component, pageProps }: AppProps) => {

  useEffect(() => { processCookies() }, []) // Queries user for permisission to use cookies

  return (

    <Provider store={store}>

      <ElpisTheme>

        <NextjsProgressbar color={siteThemeColor} />

        <GlobalStyles />

        <FetchAppData />

        <ConfigureQuery />

        <BigWrapper>

          <Component {...pageProps} />

        </BigWrapper>

        <ToastContainer />

        <Message />

        <Loader />

      </ElpisTheme>

    </Provider>

  )

}

export default MyApp
