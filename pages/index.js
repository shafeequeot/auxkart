import Head from 'next/head'
import Header from '../components/header/index.js'
import Banner from '../components/home/banner.js'
import Icons from '../components/home/icons.js'
import Products from '../components/common/productGrid'
import axios from 'axios'

export default function Home({products}) {
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
        <Products products= {products}/>
      </main>

      <footer className="{styles.footer}">
        
      </footer>
    </div>
  )
}


export async function getStaticProps(){
  const {data : products}  = await axios.get( `${process.env.FRONT_END_URL}/api/wooproducts`)
  return{
      props:  products || {},
      revalidate: 1,
  }
} 