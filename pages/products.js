import Header from '../components/header/index.js'
import Products from '../components/common/productGrid'
import axios from 'axios'




function products({products}) {

  return (
    <div>
      <Products products= {products}/>
    </div>
  )
}

export default products


export async function getStaticProps(){
  const {data : products}  = await axios.get( `http://localhost:3000/api/wooproducts`)
  return{
      props:  products || {},
      revalidate: 1,
  }
} 