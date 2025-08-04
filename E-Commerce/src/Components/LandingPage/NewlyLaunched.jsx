import React from 'react'
import ProductCard from '../Utils/ProductCard'
import Products from '../API/ApiTL'

const NewlyLaunched = () => {
  const likedProducts=Products.filter(p => p.isLikedProducts)
  return (
    <div className='px-3'>
      <h2 className="text-3xl !font-bold mt-3 px-2 text-blue-800  tracking-wide">Newly Launched</h2>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4'>
        {likedProducts.map((product)=> (
          <div key={product.id} className='h-full'>
            <ProductCard product={product}/>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default NewlyLaunched
