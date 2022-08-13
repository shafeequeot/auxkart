import Head from 'next/head'
import Header from '../components/header/index.js'
import Banner from '../components/home/banner.js'
import Icons from '../components/home/icons.js'
import PopularItems from '../components/common/popularProduct'

export default function Home() {
  return (
    <div >
        <Head>
        <title>Auxkart | Trusted online mobile shop</title>
        <meta name="description" content="Millions trusted mobile shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>



      <main className="container mx-auto flex flex-col gap-4">
        <Banner/>
        <Icons/>
        <PopularItems/>
      </main>

      <footer className="{styles.footer}">
        
      </footer>
    </div>
  )
}
