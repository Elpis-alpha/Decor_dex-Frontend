import type { GetStaticProps, NextPage } from 'next'

import homeDatax from '../source/utils/homeData.json'

import commonData from '../source/utils/common.json'

import HeadTag from '../source/components/general/HeadTag'

import TopPart from '../source/components/general/top/TopPart'

import AttractiveTop from '../source/components/index/AttractiveTop'

import TopProducts from '../source/components/index/TopProducts'

import TopCombos from '../source/components/index/TopCombos'

import OurStore from '../source/components/index/OurStore'

import WhoWeAre from '../source/components/index/WhoWeAre'

import SiteFooter from '../source/components/general/SiteFooter'

import Testimonials from '../source/components/index/Testimonials'


const Home: NextPage = ({ common, homeData }: any) => {

  return (

    <>

      <HeadTag title="" />

      <TopPart common={common} />

      <AttractiveTop {...{ common, homeData }} />

      <WhoWeAre {...{ common, homeData }} />

      <TopProducts {...{ common, homeData }} />

      <TopCombos {...{ common, homeData }} />

      <OurStore {...{ common, homeData }} />

      <Testimonials {...{ common, homeData }} />

      <SiteFooter {...{ common }} />

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
