import { React } from 'react'

export default function Filter() {

    const displayCat = [
        { img: 'nike_ads.jpg' }, 
        { img: 'ref.png' }, 
        { img: 'bluetooth.jpg' }, 
    ]
    
    return(
        <>
            <div className="hidden lg:flex flex-col w-80 border-gray-200 border-r-2 mr-10">

                <div className='my-5'>
                    <div className='relative border-gray-200 border-b-2'>
                        <select defaultValue="CATEGORY" className="select select-ghost">
                            <option disabled={true}>CATEGORY</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                    </div>
                    <div className='relative border-gray-200 border-b-2'>
                        <select defaultValue="PRICE RANGE" className="select select-ghost">
                            <option disabled={true}>PRICE RANGE</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                    </div>
                    <div className='relative border-gray-200 border-b-2'>
                        <select defaultValue="COLOR" className="select select-ghost">
                            <option disabled={true}>COLOR</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                    </div>
                    <div className='relative border-gray-200 border-b-2'>
                        <select defaultValue="BRANDS" className="select select-ghost">
                            <option disabled={true}>BRANDS</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                    </div>
                    <div className='relative border-gray-200 border-b-2'>
                        <select defaultValue="FAST SHIPPING" className="select select-ghost">
                            <option disabled={true}>FAST SHIPPING</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                    </div>
                </div>

                <div className='pb-3 pr-4'>
                    <div className='my-5'>
                        <button className="btn bg-[#F08C68] text-white font-medium rounded-none w-full">CLEAR FILTERS</button>
                    </div>
                    {
                        displayCat.map((cat, index) => {
                            return(
                                <div key={index} className='pb-2'>
                                    <img 
                                        src={(`../src/assets/${cat.img}`)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}