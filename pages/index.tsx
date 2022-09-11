import type { GetStaticProps, NextPage } from 'next'

import homeDatax from '../source/utils/homeData.json'

import commonData from '../source/utils/common.json'

import HeadTag from '../source/components/general/HeadTag'

import TopPart from '../source/components/general/top/TopPart'

import AttractiveTop from '../source/components/index/AttractiveTop'

import TopProducts from '../source/components/index/TopProducts'
import TopCombos from '../source/components/index/TopCombos'
import OurStore from '../source/components/index/OurStore'


const Home: NextPage = ({ common, homeData }: any) => {

  return (

    <>

      <HeadTag title="" />

      <TopPart common={common} />

      <AttractiveTop {...{ common, homeData }} />

      <TopProducts {...{ common, homeData }} />

      <TopCombos {...{ common, homeData }} />

      <OurStore {...{ common, homeData }} />

    </>

  )

}

export const getStaticProps: GetStaticProps = async (context) => {

  const fetchedCommonData = commonData

  const fetchedHomeData = homeDatax

  return {

    props: {

      common: fetchedCommonData,

      homeData: fetchedHomeData

    }

  }

}

export default Home
