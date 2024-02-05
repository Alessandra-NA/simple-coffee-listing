import React from 'react'
import emptyStar from '../assets/Star.svg'
import fullStar from '../assets/Star_fill.svg'

function ProductCard({ product }) {
  return (
    <div className='card w-fit relative mx-auto'>
      {
        product.popular &&
        <div className='tag px-3 py-1 text-xs bg-yellow w-fit rounded-full text-black capitalize absolute left-2 top-2'>Popular</div>
      }
      <img src={product.image} alt={product.name}
           className='rounded-2xl w-64 h-40 object-cover'
      />
      <div className="flex justify-between">
        <div>
          <h1 className='text-white text-base my-3'>{product.name}</h1>
          <div className='flex gap-1 text-sm'>
            <img src={product.votes > 0 ? fullStar : emptyStar} alt="stars" className='inline w-5'/>
            {
               product.votes === 0 ? <p className='text-light-gray'>No ratings</p> :
               <div className='flex gap-1'>
                  <>{product.rating} </>
                  <p className='text-light-gray'>({product.votes} votes)</p>
               </div>
            }
          </div>
        </div>
         <div className="flex flex-col items-end">
              <p className='price my-2 px-2 py-1 rounded-lg h-fit text-black font-bold bg-mint text-sm w-fit'>{product.price}</p>
              {
                 !product.available &&
                 <p className='text-sm text-orange mt-1'>Sold out</p>
              }
         </div>
      </div>
    </div>
  )
}

export default ProductCard