import type { GetStaticProps, NextPage } from 'next'

import commonData from '../source/utils/common.json'

import HeadTag from '../source/components/general/HeadTag'

import TopPart from '../source/components/general/top/TopPart'

import AttractiveTop from '../source/components/index/AttractiveTop'


const Home: NextPage = ({ common }: any) => {

  return (

    <>

      <HeadTag title="" />

      <TopPart common={common} />

      <AttractiveTop common={common} />

    </>

  )

}

export const getStaticProps: GetStaticProps = async (context) => {

  const fetchedCommonData = commonData

  return {

    props: {

      common: fetchedCommonData

    }

  }

}

export default Home
