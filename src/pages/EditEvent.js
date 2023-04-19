import React from 'react'
import { IoIosHome } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoReader } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";

export default function EditEvent() {
  return (
  <>
            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-10 bg-gray-200 h-full" >
                <div className="min-[480px]:grid grid-cols-6">
                    <div className='min-[480px]:flex col-span-5 ...'>
                        <h2 className="dark:text-black text-3xl  mb-4 px-6" >Edit Event</h2>
                    </div>                
                </div>
                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <div className="min-[480px]:m-20">
                        <form>
                            <label className='mt-5 min-[480px]:ml-12 block mb-2 text-sm font-bold text-gray-500 dark:text-white'>Title</label>
                            <input type="text" className="min-[480px]:ml-12 w-11/12 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Bat on Hearts Loan Ends'/>
                            <div className='min-[480px]:grid grid-cols-12'>
                                <div className='col-span-7 ..'>
                                    <div className='min-[480px]:ml-12 min-[480px]:flex mt-5'>
                                    <input type="text" className="w-28 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-3" placeholder='Feb 15,2020'/>
                                    <input type="text" className="w-24 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-3" placeholder='7:30pm'/>
                                    <p className='mr-3 mt-3 text-sm font-bold text-gray-500'>to</p>     
                                    <input type="text" className="w-24 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-3" placeholder='8:00pm'/>
                                    <input type="text" className="w-28 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-2" placeholder='Feb 15,2020'/>
                                    </div>
                                    <div className='flex mt-5 '>   <span className='mt-2 mr-4'><IoIosHome size={28} color='gray'/></span>
                                    <input type="text" className="w-full bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Hauser Wirth'/></div>
                                    
                                    <label htmlFor="message" className="mt-5 min-[480px]:ml-12 block mb-2 text-sm font-bold text-gray-500 dark:text-white">Description</label>
                                    <div className='flex'>
                                        <span className='mt-2 mr-4'><IoReader size={28} color='gray'/></span>
                                    
                                        <textarea id="message" rows="4" className="italic block p-2.5 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Description"></textarea>
                                    </div>
                                    <div className="min-[480px]:ml-12 mt-6 w-11/12 mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">
                                            <div className="flex items-center justify-between px-3 py-2 border-b-2  border-blue-200 ">
                                                <div className="flex flex-wrap items-center divide-blue-400 sm:divide-x dark:divide-blue-400">
                                                    <div className="flex items-center space-x-1 sm:pr-4 rounded-xl">                                       
                                                        <input type="text" className=" w-full text-black bg-white  focus:outline-0  italic rounded-lg text-base px-4 py-1 border-none" name="add_tag" placeholder="Add Artwork" />
                                                    
                                                        
                                                    </div>
                                                </div>          
                                            </div>
                                            <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">                          
                                                <ul  className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-8">
                                                    <li  className="mr-2 flex">
                                                        <img className="h-8 rounded-lg w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="inline-block px-4 py-2  text-black font-bold" aria-current="page">Bat on Heart</a>
                                                        <span className='mt-3 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    <li  className="mr-2 flex">
                                                        <img className="h-8 rounded-lg w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="inline-block px-4 py-2  text-black font-bold" aria-current="page">Virtual Relief</a>
                                                        <span className='mt-3 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    <li  className="mt-4 mr-2 flex">
                                                        <img className="h-8 rounded-lg w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="inline-block px-4 py-2  text-black font-bold" aria-current="page">Personality Inventory #1</a>
                                                        <span className='mt-3 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </div>             
                                </div>  
                                <div className='col-span-5 mt-20 ml-4'>
                                    <div className='flex w-full'>
                                        <span className='mt-2 mr-4'><IoPeopleSharp size={28} color='gray'/></span>
                                        <div className="w-full person mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">
                                            <div className="flex items-center justify-between px-3 py-2 border-b-2  border-blue-200 ">
                                                <div className="flex flex-wrap items-center divide-blue-400 sm:divide-x dark:divide-blue-400">
                                                    <div className="flex items-center space-x-1 sm:pr-4 rounded-xl">                                       
                                                        <input type="text" className=" w-full text-black bg-white  focus:outline-0  italic rounded-lg text-base px-4 py-1 border-none" name="add_tag" placeholder="Add Person" />
                                                                        
                                                    </div>
                                                </div>          
                                            </div>
                                            <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">                          
                                                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-8">
                                                    <li className="mr-2 flex">
                                                        <img className="h-8 rounded-full w-8 mt-3" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="mt-2 inline-block px-4 py-2  text-black font-bold" aria-current="page">Rose Wells</a>
                                                        <span className='mt-5 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    <li className="mr-2 flex">
                                                        <img className="h-8 rounded-full w-8 mt-3" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="mt-2 inline-block px-4 py-2  text-black font-bold" aria-current="page">Dexter James</a>
                                                        <span className='mt-5 mr-4'> <RxCross2/></span>
                                                    </li>                       
                                                </ul>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>             
                        </form>
                    </div>


                </div>
            </div>

    </>
  )
}
