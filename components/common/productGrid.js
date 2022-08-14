import Image from 'next/image'


function Popular({products}) {
    const gotProduct = products?.map((item,idx)=>
    
    <div key={idx} className='bg-gray-100 shadow-sm rounded-sm flex flex-col gap-2 p-3'>

                <div className='h-36 overflow-hidden bg-white rounded-sm '>
                    <Image src={item.images[0]?.src} width={330} height={300} layout="responsive"/>
                </div>
                <h4 className='font-medium text-blue-700 overflow-hidden truncate'>
                    {item.name}
                </h4>
                <div className='text-sm text-gray-600 h-10 overflow-hidden text-ellipsis'>
                    {item.short_description }
                </div>
                <div className='text-red-600 flex flex-row justify-between'>
                    <div>
        
                    {item.sale_price} <span className='text-xs'>AED</span>
                    
                    </div>
                    <button className='bg-blue-700 text-sm text-white p-2 rounded-md'>Add to cart</button>
                </div>
            </div>
    
    )
    
          
    
    return (
        <div className='grid grid-cols-5 gap-4'>{gotProduct}</div>
    )

}


export default Popular


