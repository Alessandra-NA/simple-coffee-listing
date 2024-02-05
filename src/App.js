import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import bg from './assets/bg-cafe.jpg';
import data from './data';
import { useState } from 'react';


function App() {

   const [filteredData, setFilteredData] = useState(data);
   const [filter, setFilter] = useState('all');

   const filterProducts = (filterName) => {
      setFilter(filterName);
      if (filterName === 'available') {
         const newList = data.filter(product => product.status === 'available')
         setFilteredData(newList);
      } else if (filterName === 'all') {
         setFilteredData(data);
      }
   }

   return (
      <div className="App text-white bg-black h-full font-medium">
         <div style={{ backgroundImage: `url(${bg})` }} className='image w-full h-72 bg-cover' />
         <div className='-mt-32 relative bg-dark-gray sm:w-4/6 mx-auto  py-20 rounded-xl xl:w-10/12 xl:max-w-6xl'>
            <h1 className='font-bold text-3xl text-center'>Our Collection</h1>
            <p className='text-center text-base text-light-gray w-4/5 mx-auto my-4 mb-6 lg:max-w-lg xl:max-w-xl'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
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
