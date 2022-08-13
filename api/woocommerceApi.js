import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url:"https://auxkart.com",
    consumerKey: "ck_d8cedf534cf568a18f51fef28c846f6cd007b440",
    consumerSecret: "cs_bdaf187507686bb420e5db33bb36c58b61ea36ef",
    wpAPI: true,
    version: "wc/v3"
})

export async function fetchwooCommerceProducts(){
//     try{
//         const responds = await api.get("products");
//         return responds
//     } catch(error){
//         throw new Error(error)
//     }

api.get("products", {
    per_page: 20, // 20 products per page
  })
    .then((response) => {
        console.log(response)
    }).catch(err=>{
        console.log(err)
    })

}


