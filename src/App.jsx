import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/header'
import Filter from './components/filter'
import Cart from './components/cart'

function App() {

  const [products, setProducts] = useState([])
  const [countData, setCount] = useState([])

  const justInProd = [
    { userId: '7', 
      products: [{
        id: '101', 
        title: 'Mocha Mate',
        price: 388.00, 
        description: 'Sample deszcription: Lorem Ipsum', 
        category: 'kitchen gear', 
        image: 'mocha.png'
    }]}, 
    { userId: '8', 
      products: [{
        id: '102', 
        title: 'Swift Write',
        price: 10.99, 
        description: 'Sample deszcription: Lorem Ipsum', 
        category: 'office tool',
        image: 'swift_write.png'
    }]}, 
    { userId: '9', 
      products: [{
        id: '103', 
        title: 'Barber Tool',
        price: 199.99, 
        description: 'Sample deszcription: Lorem Ipsum', 
        category: 'self care',
        image: 'barber_tool.png'
    }]}, 
    { userId: '10', 
      products: [{
        id: '104', 
        title: 'Marcel the Shell',
        price: 33.99, 
        description: 'Sample deszcription: Lorem Ipsum', 
        category: 'home decor',
        image: 'marcel.png'
    }]},
    { userId: '11', 
      products: [{
        id: '105', 
        title: 'Pepper',
        price: 26.41, 
        description: 'Sample deszcription: Lorem Ipsum', 
        category: 'kitchen gear',
        image: 'pepper.png'
    }]}, 
    { userId: '12', 
      products: [{
        id: '106', 
        title: 'vera cup',
        price: 94.99, 
        description: 'Sample deszcription: Lorem Ipsum', 
        category: 'kitchen gear',
        image: 'cup.png'
    }]},
  ]

  const apiCall = async () => {
    try{
      const result = await axios.get(`${import.meta.env.VITE_PRODUCTS_URL}/products`)
      console.log('I AM THE RESULT: ', result.data)

      setProducts(result.data)
    }
    catch(err){
      console.log(`THERE IS A GLITCH IN THE MATRIX: `, err)
    }
  }

  const addCart = async () => {
    try{
      const addNewCart = await axios.post(`${import.meta.env.VITE_PRODUCTS_URL}/carts`, 
      )
    }
    catch(errAddCart){
      console.log(`!!! Error adding new to cart !!!`, errAddCart)
    }
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <>
      <Header />
      <dialog id="cart-modal" className="modal sm:modal-middle">
        <div className="modal-box max-w-[25rem] min-w-[25rem] lg:hidden">
          <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='flex justify-center mt-3'>
            <Cart />
          </div>
        </div>
      </dialog>

      {/* - - - - - - - - - - MOBILE VIEW - - - - - - - - - - */}
      <div className='md:hidden text-[#3B2925]'>
        <div className='text-[#3B2925] bg-[#F1F1F1]'>

          <div className="flex flex-row items-center p-5">
            <div className='relative pr-8'>
              <div className='avatar'>
                <div className="w-15 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>

              <button className='
                  btn btn-circle 
                  bg-[#F08C68] 
                  h-12 w-12 
                  rounded-full 
                  absolute 
                  left-11
                  mt-2'
              >
                <img 
                  src='/arrow_up.svg' 
                  alt='icon'
                  className='w-4'
                />
              </button>
            </div>

            <div className='flex flex-col text-sm'>
              <span>30% Flat Sale</span>
              <span>Last-Minute Deals</span>
            </div>
          </div>

          <p className='leading-[1.20] text-4xl px-5 pb-5'>
            DISCOVER EVERYTHING YOU NEED IN ONE PLACE
          </p>
        </div>
        <div className="divider m-0 p-0 h-0"></div>

        <div className='relative py-5 bg-[#F1F1F1]'>
          <div className='flex flex-nowrap gap-4 p-3 overflow-x-scroll scrollbar-hide'>
            {
              justInProd.map((prod, index) => (
                <div key={index} className='flex flex-col items-center bg-[#E7E7E7] rounded-sm w-64 flex-shrink-0'>
                  {
                    prod.products.map((desc, i) => (
                      <ul key={i}>
                        <li>
                          <img 
                            src={(`../src/assets/no_bg/${desc.image}`)}
                            alt={desc.name}
                            className='rounded-sm'
                          />
                          <p className='p-3 uppercase font-medium'>{desc.title}</p>
                        </li>
                      </ul>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>

        <div className='p-5'>
          <p className='text-4xl pb-5'>BESTSELLERS</p>

          <div className='bg-[#FFFFFF]'>
            <div className='flex justify-center w-full'>
              <img 
                src={(`../src/assets/no_bg/cup.png`)}
                className='flex justify-center'
              />
            </div>

            <div className='flex justify-between p-5'>
              <div className='w-1/2'>
                <p className='font-medium'>VERA PREMIUM CERAMIC CUP</p>
              </div>
              <div className='w-1/2 flex flex-row-reverse gap-1'>
                <div className="avatar">
                  <div className="w-12 rounded-sm border-1 border-gray-200">
                    <img 
                      src={(`../src/assets/no_bg/cup.png`)}
                      className='hue-rotate-90'
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 rounded-sm border-1 border-gray-200">
                    <img 
                      src={(`../src/assets/no_bg/cup.png`)}
                      className='hue-rotate-180'
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 rounded-sm border-1 border-gray-200">
                    <img 
                      src={(`../src/assets/no_bg/cup.png`)}
                      className='hue-rotate-275'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between bg-[#E6E5E3] p-4'>
            <p className='text-sm'>⭐ 4.9 160 Reviews </p>
            <p className='font-bold text-md'>£94.00</p>
          </div>
          
        </div>
      </div>

      {/* - - - - - - - - - - MAIN VIEW - - - - - - - - - - */}
      <div className='px-5 sm:px-10 text-[#3B2925]'>
        <div className='hidden md:flex w-full py-15'>
          <div className='w-64'>
            <p>Explore our curated range of products to elevate every part of your life</p>
          </div>
          <div className='w-80 grow font-light text-6xl xl:pl-80 pl-0'>
            <p>ALL YOUR FAVORITES</p>
            <p>IN ONE PLACE</p>
          </div>
        </div>

        <div className='flex justify-between w-full font-medium'>
          <button className='hidden lg:flex justify-between max-w-50 w-1/4 sm:w-1/2 lg:max-w-76'>
            <span>FILTERS</span>
            <span>☰</span>
          </button>
          <div className='lg:hidden relative w-40'>
            <select defaultValue="FILTERS" className="select select-ghost">
              <option disabled={true}>FILTERS</option>
              <option>Inter</option>
              <option>Poppins</option>
              <option>Raleway</option>
            </select>
          </div>
          <div className='relative'>
            <select defaultValue="SORT BY" className="select select-ghost">
              <option disabled={true}>SORT BY</option>
              <option>Alphabetically </option>
              <option>Price </option>
            </select>
          </div>
        </div>

        <div className="divider m-0 pt-0 h-0"></div>

        <div className='flex flex-col md:flex-row'>
          <div className='hidden md:block'>
            <Filter />
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 mt-10'>
            {
              justInProd.map((display, index) => {
                return(
                  <div key={index} className="card bg-base-100 shadow-sm rounded-none">
                    {
                      display.products.map((desc, i) => (
                        <div key={i}>
                          <figure className='bg-[#F1F1F1]'>
                            <img
                              src={(`../src/assets/no_bg/${desc.image}`)}
                              className='max-h-32 sm:max-h-60 w-auto object-contain'
                            />
                          </figure>
                          <div className='card-body uppercase'>
                            <p>{desc.category}</p>
                            <div className='flex flex-col lg:flex-row sm:justify-between'>
                              <h2 className="card-title text-sm lg:text-lg">{desc.title}</h2>
                              <h2 className="card-title text-sm lg:text-lg">£{desc.price}</h2>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              })
            }
            <div className='col-span-2'>
              <img
                src={(`../src/assets/no_bg/bottom_ad.png`)}
                alt='ads'
                className='w-full bg-[#F3F0E9]'
              />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
