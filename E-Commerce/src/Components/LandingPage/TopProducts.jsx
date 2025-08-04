import React from 'react'
import ProductCard from '../Utils/ProductCard'
import Products from '../API/ApiTL'
const TopProducts = () => {
  const topProducts=Products.filter(p => p.isTopProducts)

  return (
    <div className='px-3'>
       <h2 className="text-3xl !font-bold tracking-wide  mt-2 px-2 text-blue-800">Top Products</h2>
       <div  className="grid sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
        {topProducts.map((product) => (
          <div key={product.id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))} 
       </div>
    </div>
  )
}

export default TopProducts
