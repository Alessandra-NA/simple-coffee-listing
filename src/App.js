import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import bg from './assets/bg-cafe.jpg';
import vector from './assets/vector.svg';
import data from './data/simple-coffee-listing.json';
import { useState } from 'react';


function App() {

   const [filteredData, setFilteredData] = useState(data);
   const [filter, setFilter] = useState('all');

   const filterProducts = (filterName) => {
      setFilter(filterName);
      if (filterName === 'available') {
         const newList = data.filter(product => product.available)
         setFilteredData(newList);
      } else if (filterName === 'all') {
         setFilteredData(data);
      }
   }

   return (
      <div className="App text-white bg-black min-h-dvh font-medium">
         <div style={{ backgroundImage: `url(${bg})` }} className='image w-full h-72 bg-cover' />
         <div className='-mt-32 relative bg-dark-gray sm:w-4/6 mx-auto  py-20 rounded-xl xl:w-10/12 xl:max-w-6xl overflow-hidden'>
            <h1 className='font-bold text-3xl text-center relative w-fit mx-auto'>
               <p className='z-10 relative'>Our Collection</p>
               <img className="absolute -top-12 left-28" src={vector} alt="" />
            </h1>
            <p className='text-center text-base text-light-gray w-4/5 mx-auto my-4 mb-6 lg:max-w-lg xl:max-w-xl relative'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className='flex text-sm gap-4 justify-center mb-10'>
               <button type='button' className={filter === 'all' ? 'px-4 py-2 rounded-lg cursor-pointer bg-light-gray' : 'px-4 py-2 rounded-lg cursor-pointer'}
                  onClick={() => filterProducts('all')}>
                  All Products
               </button>
               <button type='button' className={filter === 'available' ? 'px-4 py-2 rounded-lg cursor-pointer bg-light-gray' : 'px-4 py-2 rounded-lg cursor-pointer'}
                  onClick={() => filterProducts('available')}>
                  Available Now
               </button>
            </div>
            <ProductList data={filteredData} />
         </div>
      </div>
   );
}

export default App;
