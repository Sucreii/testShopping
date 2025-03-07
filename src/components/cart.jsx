import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function Cart() {

    const [countData, setCount] = useState([]) 
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
    
    const handleDelID = async (id) => {
        try{
            const response = await axios.delete(`${import.meta.env.VITE_PRODUCTS_URL}/carts/${id}`)
            console.log(`Success delete`, response)
            
            setCount(countData.filter(cart => cart.id !== id))
        }
        catch(errDel){
            console.log(`Error on Deleting a Cart`, errDel)
        }
    }

    useEffect(() => {
        getCount()
    }, [])

    return(
        <>
        <div tabIndex={0} className="dropdown-content z-50 w-full lg:w-64 bg-base-100 p-4 lg:shadow-lg rounded-md">
            {
                countData.map((cart, index) => {
                    return(
                        <>
                        <div key={index}>
                            <div className='flex flex-row justify-between'>
                                <p>ID: {cart.id}</p>
                                <button 
                                    className='btn btn-circle w-5 h-5'
                                    onClick={() => handleDelID(cart.id)}
                                >
                                    <img 
                                        src='/remove.svg' 
                                        alt='icon'
                                    />
                                </button>
                            </div>
                            <p className='text-sm font-light'>Date: {cart.date.split('T')[0]}</p>
                                {
                                    cart.products.map((cartItems, i) => (
                                        <div key={i} className='flex flex-row justify-between'>
                                            <p>Product  {cartItems.productId}</p>
                                            <p>x{cartItems.quantity}</p>
                                        </div>
                                    ))
                                }
                        </div>
                        <div className='divider py-2 h-0 m-0'></div>
                        </>
                    )
                })
            }
            <p className="font-light flex justify-center">Total Items: ({countData.length})</p>
        </div>
        </>
    )
}