import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className="flex flex-col gap-4 flex-1">
                {/* input boxes */}
                <input type="text" className='border p-3 rounded-lg' placeholder='Name' 
                id='name' maxLength='62' minLength='10' required/>
                <textarea type="text" className='border p-3 rounded-lg' placeholder='Description' 
                id='Description' required/>
                <input type="text" className='border p-3 rounded-lg' placeholder='Address' 
                id='Address' required/>

                {/* check boxes */}
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='sale' className='w-5' />
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='rent' className='w-5' />
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='parking' className='w-5' />
                        <span>Parking spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='furnished' className='w-5' />
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='offer' className='w-5' />
                        <span>Offer</span>
                    </div>
                </div>

                {/* beds n bathroom */}
                <div className='flex flex-wrap gap-6'>
                    <div className="flex item-center gap-2">
                        <input type="number" id='bedrooms' min='1' max='10' required 
                         className='p-1 border border-gray-300 rounded-lg' />
                        <p>Bedrooms</p>
                    </div>
                    <div className="flex item-center gap-2">
                        <input type="number" id='bathrooms' min='1' max='10' required 
                         className='p-1 border border-gray-300 rounded-lg' />
                        <p>Bathrooms</p>
                    </div>
                    <div className="flex item-center gap-2">
                        <input type="number" id='regularPrice' min='1' max='10' required 
                         className='p-1 border border-gray-300 rounded-lg' />
                         <div className='flex flex-col items-center'>
                            <p>Regular price</p>
                            <span className='text-xs'>($ / per month)</span>
                         </div>   
                    </div>
                    <div className="flex item-center gap-2">
                        <input type="number" id='discountPrice' min='1' max='10' required 
                         className='p-1 border border-gray-300 rounded-lg' />
                         <div className='flex flex-col items-center'>
                            <p>Discounted price</p>
                            <span className='text-xs'>($ / per month)</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* upload part */}
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images: 
                <span className='font-normal text-gray-600 ml-2'>Then first image willl be the cover (max 6)</span>
                </p> 
                <div className='flex gap-4'>
                    <input type="file" id='images' accept='image/*' multiple 
                    className='p-3 border border-gray-300 rounded w-full'/>    
                    <button className='p-3 text-green-700 border border-green-700 
                    rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div> 

                {/* create listing button */}
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase 
                hover:opacity-95 disabled::opacity-80'>Create Listing</button>
            </div>
        </form>
    </main>
  )
}
