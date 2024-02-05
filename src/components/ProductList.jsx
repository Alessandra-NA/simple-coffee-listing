import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ data }) {
   return (
      <div className='flex flex-col justify-center gap-16 md:flex-row md:flex-wrap md:max-w-lg lg:gap-y-16 lg:gap-x-1 lg:max-w-xl mx-auto xl:max-w-4xl xl:px-6'>
         {
            data.map((product) =>
               <ProductCard key={product.id} product={product} className='w-fit' />)
         }
      </div>
   )
}

export default ProductList