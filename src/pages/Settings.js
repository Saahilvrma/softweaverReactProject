import React from 'react'

export default function Settings() {
  return (
    <>

 

    <div className="min-[480px]:pt-10 sm:ml-48 min-[1026px]:top-10 bg-gray-200 h-full" >
        <div className="min-[480px]:grid grid-cols-6">
            <div className='min-[480px]:flex col-span-5 ...'>
                <h2 className="dark:text-black text-3xl  mb-6 px-6" >Settings</h2>
            
            </div>
        
        </div>
 
        <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
            <div className="min-[1026px]:m-20 min-[1026px]:mt-44" >

                <div className='min-[480px]:grid grid-cols-6 gap-4'>
                    <div className='col-span-3 min-[1026px]:flex mb-10'>
                       <p className='font-semibold text-lg'>Tags</p> 
                       <div className='ml-8 '> 
                       <hr className='mb-2 divide-y divide-blue-300'/>
                        <div className=''>
                            
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500 bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className=" h-4 w-4 text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-400  rounded-full  mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-400"></span>
                                <p className='text-base font-medium  ml-1' >love</p>
                            </span>
                            
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500  bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className=" h-4 w-4 text-white bg-amber-500 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500  rounded-full  mr-2 mb-2 dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-500"></span>
                                <p className='text-base font-medium ml-1' >instagood</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500  bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className=" h-4 w-4 text-white bg-yellow-300 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300  rounded-full  mr-2 mb-2 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"></span>
                                <p className='text-base font-medium ml-1' >photooftheday</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500  bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className=" h-4 w-4 text-white bg-emerald-400 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-400  rounded-full  mr-2 mb-2 dark:bg-emerald-400 dark:hover:bg-emerald-400 dark:focus:ring-emerald-400"></span>
                                <p className='text-base font-medium ml-1' >beautiful</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500  bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className=" h-4 w-4 text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600  rounded-full  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"></span>
                                <p className='text-base font-medium ml-1' >fashion</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500  bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className="h-4 w-4 text-white bg-fuchsia-400 hover:bg-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-400  rounded-full  mr-2 mb-2 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-400 dark:focus:ring-fuchsia-400"></span>
                                <p className='text-base font-medium ml-1' >tbt</p>
                            </span>
                            <span className='flex items-center text-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500 bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className=" h-4 w-4 text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600  rounded-full  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"></span>
                                <p className='text-base font-medium  ml-1' >cute</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500 bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className="h-4 w-4 text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600  rounded-full  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"></span>
                                <p className='text-base font-medium ml-1' >happy</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500 bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className="h-4 w-4 text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600  rounded-full  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"></span>
                                <p className='text-base font-medium ml-1' >followme</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500 bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className="h-4 w-4 text-white bg-fuchsia-400 hover:bg-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-400  rounded-full  mr-2 mb-2 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-400 dark:focus:ring-fuchsia-400"></span>
                                <p className='text-base font-medium ml-1' >like4like</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500 bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className="h-4 w-4 text-white bg-fuchsia-400 hover:bg-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-400  rounded-full  mr-2 mb-2 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-400 dark:focus:ring-fuchsia-400"></span>
                                <p className='text-base font-medium  ml-1' >follow</p>
                            </span>
                            <span className='flex items-center'>
                                <input type="checkbox" className="ml-10 mr-4 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 rounded-sm border-blue-500  bg-white font-bold  text-md w-3.5 h-3.5" name="medium" />
                                <span className="h-4 w-4 text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600  rounded-full  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"></span>
                                <p className='text-base font-medium ml-1' >me</p>
                            </span>
                            
                         </div>
                         <hr className='mt-2 '/>
                            <span className='flex mt-3'>
                                <button type="button" className="text-black bg-transparent border-2 border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 font-medium rounded-full text-sm px-4 py-1 text-center mr-8 mb-2 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">delete</button>
                                <button type="button" className="text-black bg-transparent border-2 border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 font-medium rounded-full text-sm px-4 py-1 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">merge</button>
                            </span>
                        </div>
                        
                    </div>
                    <div className='col-span-3 flex'>
                       <p className='font-semibold text-lg'>Labels</p>
                        <div className='ml-8'> 
                            <span className='flex'>
                                <button type="button" className="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-400 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-400"></button>
                                <p className='font-bold text-sm mt-1 ml-3' >Important</p>
                            </span>
                            <span className='flex '>
                                <button type="button" className="text-white bg-amber-500 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-500"></button>
                                <p className='font-bold text-sm mt-1 ml-3' >Personal</p>
                            </span>
                            <span className='flex '>
                                <button type="button" className="text-white bg-yellow-300 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"></button>
                                <p className='font-bold text-sm mt-1 ml-3' >2020 Goals</p>
                            </span>
                            <span className='flex '>
                                <button type="button" className="text-white bg-emerald-400 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-400 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-emerald-400 dark:hover:bg-emerald-400 dark:focus:ring-emerald-400"></button>
                                <p className='font-thin  italic text-sm mt-1 ml-3' >Unlabeled</p>
                            </span>
                            <span className='flex '>
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"></button>
                                <p className='font-thin  italic text-sm mt-1 ml-3' >Unlabeled</p>
                            </span>
                            <span className='flex '>
                                <button type="button" className="text-white bg-fuchsia-400 hover:bg-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-400 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-400 dark:focus:ring-fuchsia-400"></button>
                                <p className='font-thin  italic text-sm mt-1 ml-3' >Unlabeled</p>
                            </span>
                            <span className='flex '>
                                <button type="button" className="text-white bg-stone-400 hover:bg-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-400 font-medium rounded-full text-sm px-10 py-4 text-center mr-2 mb-1 dark:bg-stone-400 dark:hover:bg-stone-400 dark:focus:ring-stone-400"></button>
                                <p className='font-thin  italic text-sm mt-1 ml-3' >Unlabeled</p>
                            </span>
                        </div>
                    </div>

                </div>


          



            </div>


        </div>
    </div>


</>
  )
}
