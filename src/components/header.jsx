import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Cart from '../components/cart'

export default function Header() {

    const [countData, setCount] = useState([])
    const [openModal, setIsOpen] = useState(false)
    const menuArr = [
        { menuCount: '1', title: 'Discover', alt: 'Item1' }, 
        { menuCount: '2', title: 'Apparel', alt: 'Item2' }, 
        { menuCount: '3', title: 'Bags', alt: 'Item3' }, 
        { menuCount: '4', title: 'Shoes', alt: 'Item4' }, 
        { menuCount: '5', title: 'Holiday Picks', alt: 'Item5' }, 
        { menuCount: '6', title: 'Others', alt: 'Item6' }, 
    ]

    const getCount = async () => {
        try{
            const cartCounts = await axios.get(`${import.meta.env.VITE_PRODUCTS_URL}/carts`)
            console.log(`Get all card ID: `, cartCounts.data)
            
            setCount(cartCounts.data)
        }
        catch(err){
            console.log(`Error on Carts`, err)
        }
    }

    useEffect(() => {
        getCount()
    }, [])

    return (
        <>
            <header className='w-full sticky top-0 z-50 bg-[#F7F7F7]'>
                <div className="bg-[#3A2319] p-2 bg-brown-900 w-full text-center text-xs text-[#7E5749] font-bold">
                    * FAST & FREE SHIPPING ON ORDERS OVER $50! *
                </div>

                <nav className="
                    flex 
                    items-center 
                    justify-between 
                    px-5 py-3
                    sm:px-10
                    relative
                    text-[#3B2925]
                    z-50"
                >
                    <div className="text-2xl font-bold">MOSS</div>
                    <div className="drawer drawer-end lg:hidden flex justify-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex items-center">
                            
                            <label htmlFor="my-drawer-4" className="drawer-button flex items-center space-x-2 cursor-pointer btn btn-ghost">
                            <span className="text-lg font-semibold">MENU</span>
                            <svg 
                                className="w-6 h-6" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                            </label>
                        </div>

                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-white/60 backdrop-blur-sm text-base-content min-h-full w-80 p-4 font-medium">
                                <li><a className='font-bold'>Login</a></li>
                                <li>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-primary badge-xs">{countData.length}</span>
                                        <a className='font-bold cursor-pointer' 
                                            onClick={() =>{document.getElementById("cart-modal").showModal()}}
                                        >Bag</a>
                                    </div>
                                </li>
                                <div className="divider m-0 p-0"></div>
                                {
                                    menuArr.map((menuOptions, index) => {
                                        return(
                                            <li key={index}>
                                                <a>{menuOptions.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='hidden lg:flex gap-9 text-sm uppercase'>
                        {
                            menuArr.map((menuBar, index) => {
                                return(
                                <div key={index}>
                                    <a href="#" className="hover:text-gray-900 font-medium text-base">{menuBar.title}</a>
                                </div>
                                )
                            })
                        }
                    </div>
                    
                    <div className="hidden lg:flex items-center space-x-4 text-sm font-medium">
                        <a href="#" className="hover:text-gray-900">
                            LOGIN
                        </a>
                        <span className="border-l border-gray-400 h-5"></span>
                        <div className="dropdown dropdown-hover dropdown-end">
                            <button className="btn btn-ghost p-0 m-0 border-none">BAG ({countData.length})</button>
                            <Cart />
                        </div>
                    </div>
                </nav>

                <div className="divider hidden md:flex m-0 p-0 px-10"></div>
            </header>
        </>
    )
}