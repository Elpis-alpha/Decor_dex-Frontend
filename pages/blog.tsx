import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {

  return (

    <div>

      Welcome to the blog

      <br />

      <Link href="/"><a>To Home</a></Link>

    </div>

  )

}

export default Home
