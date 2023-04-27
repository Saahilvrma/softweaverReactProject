import React from 'react'

import { FaThList  } from "react-icons/fa";
import { FaThLarge  } from "react-icons/fa";
import { BiNote  } from "react-icons/bi";
import { BiPlusCircle  } from "react-icons/bi";
import { BiEdit  } from "react-icons/bi";
import { BiWallet  } from "react-icons/bi";
import { MdViewAgenda } from "react-icons/md";
import axios from "axios";
export default function ArtworkGrid() {
    const [getResult, setResult] = React.useState([]);
    const fetchInfo = () => {
        return axios.get('http://127.0.0.1:3000/api/v1/get-artwork').then((res) => setResult(res.data));
    };

    React.useEffect(() => {
        fetchInfo();
    }, []);


    console.log(getResult.data)
  return (

    <>
            
         

            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-20 bg-gray-200 h-full" >
                <div className="min-[480px]:grid grid-cols-6">
                    <div className='min-[480px]:flex col-span-5 ...'>
                        <span className='flex'>
                            <h2 className="dark:text-black text-4xl  mt-2 px-6" >Pieces</h2>
                            <a href="/artwork"  className='mt-7 mr-3'><MdViewAgenda size={19} /></a>
                            <a href="/artwork/grid"  className='mt-7 mr-3'><FaThLarge /></a>
                            <a href="/artwork/listing"  className='mt-7 mr-3'><FaThList /></a>
                       </span>
                       <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full ml-8 mt-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-4 h-4 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="voice-search" className=" bg-blue-500 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1.5  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yellow Bat" required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg className="h-5 w-5  text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                </button>
                            </div>

                        </form>
                    </div>
                    


                </div>
                <hr className="ml-5 h-px my-4 bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                <div className="filters mb-4">
                   
                    <div className='min-[480px]:flex'>
                        
                        <span className='flex'>
                        <a href='/' className='flex'>
                            <span className="mr-2 ml-6 flex items-center"><BiNote/></span>
                            <p className='text-sm font-semibold mr-6'>New Report</p>
                        </a>
                        <a href='/artwork/create' className="flex">
                        <span className=" mr-2 ml-6 flex items-center"><BiPlusCircle/></span>
                        <p className='text-sm font-semibold mr-6'>New Piece</p>
                        </a>
                        </span>
                        <span className='flex max-[480px]:mt-4'>
                        <a href='/' className='flex'>
                        <span className=" mr-2 ml-6 flex items-center"><BiEdit/></span>
                        <p className='text-sm font-semibold mr-6'>Bulk Action</p>
                        </a>
                        <a href='/' className='flex'>
                        <span className=" mr-2 ml-6 flex items-center"><BiWallet/></span>
                        <p className='text-sm font-semibold mr-6'>Collections</p>
                        </a>
                        </span>
                 
                    </div>
                </div>

                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                        <div className="min-[480px]:grid grid-cols-4 gap-6">
                            {getResult.data && getResult.data.map((data, index) => {
                                return (
                                

                                <div className="max-[1024px]:col-span-2 col-span-1 ...">
                                    <div className="mt-5 mb-5 ml-2 mr-2">
                                        <img className="h-40 rounded-lg w-full" src={data.image[0] ? data.image[0] : '/rose.jpg'} alt="Girl in a jacket" />
                                        <p className='text-md font-extrabold mt-2 ml-2'>{data.Title}</p>

                                    </div>
                                </div>
                                );
                            })}
                        </div>
                           

                                

                  
                  
                  
                  
                    {/* <div className="min-[480px]:grid grid-cols-4 gap-6">

                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                    
                    </div>
                    <div className="min-[480px]:grid grid-cols-4 gap-6">

                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                    
                    </div>
                    <div className="min-[480px]:grid grid-cols-4 gap-6">

                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className="max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                        <div className=" max-[1024px]:col-span-2 col-span-1 ...">
                            <div className="mt-5 mb-5 ml-2 mr-2">
                                <img className="h-40 rounded-lg w-full" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className='text-md font-extrabold mt-2 ml-2'>Bat on Hearts</p>

                            </div>
                        </div>
                    
                    </div> */}
                  
                </div>
            </div>

        
    </>
  )
}
