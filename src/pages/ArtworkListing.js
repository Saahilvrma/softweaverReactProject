import React from 'react'
import { FaThList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdViewAgenda } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";
import axios from "axios";
export default function ArtworkListing() {
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
            <div className="grid grid-cols-6">
                    <div className='flex col-span-5 ...'>
                        <h2 className="dark:text-black text-4xl  mt-2 px-6 " >Pieces</h2>
                        <a href="/artwork"  className='mt-7 mr-3'><MdViewAgenda size={19} /></a>
                        <a href="/artwork/grid"  className='mt-7 mr-3'><FaThLarge /></a>
                        <a href="/artwork/listing"  className='mt-7 mr-3'><FaThList /></a>
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
                    <div className='col-span-1 ...'>
                        <div className="relative w-full mt-4">

                            <a href="/artwork/create" className='cursor-pointer'>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-blue-500 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                                <input type="text" id="voice-search" className="w-32 cursor-pointer bg-transparent border-2 border-blue-500 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="New Piece" readOnly />
                                {/* <a href="/sidebar"  className="absolute inset-y-0 right-0 flex items-center pr-24">

                            </a> */}
                            </a>
                        </div>
                    </div>


                </div>
                <hr className="ml-5 h-px my-3 bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                <div className="filters mb-3">

                    <div className='flex'>
                        <span className="text-sm font-semibold mr-6 ml-6 flex items-center"><IoFilterOutline /> Filter:</span>
                        <select className="text-sm font-semibold bg-transparent mr-6 border-none" >
                            <option>Status</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-6 border-none" >
                            <option>Location</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-6 border-none" >
                            <option>Date</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-6 border-none" >
                            <option>Medium</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-6 border-none" >
                            <option>Price</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-6 border-none" >
                            <option>Collections</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                    </div>
                </div>

                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    {/* <div className="min-[480px]:grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-10">
                                <a href="/" className=" underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div> */}
                    {getResult.data && getResult.data.map((data, index) => {
                        return (
                       
                            <div className="min-[480px]:grid grid-cols-6 gap-6">
                            <div className="col-span-2 ...">
                                <div className="mt-5 mb-5 ml-4 flex">
                                    <img className="h-16 rounded-lg w-16" src={data.image[0] ? data.image[0] : '/rose.jpg'} alt="Girl in a jacket" />
                                    <p className="ml-8 mt-4 text-md font-extrabold   text-black">{data.Title}</p>
                                </div>
                            </div>
                            <div className="col-span-1 ...">
                                <div className="mt-8 mb-5">
                                    <a href="/" className=" underline my-2 text-md text-gray-700">{data.acrylicAndOil}</a>
    
                                </div>
                            </div>
                            <div className="col-span-1 ... flex">
                                <div className="heading mt-8 ml-16">
                                    <a href="/" className=" underline my-2 text-md text-gray-700">{data.availability}</a>
                                </div>
    
                            </div>
                            <div className="col-span-1 ... flex">

                                <div className="heading mt-8 ml-10">
                                    <a href="/" className=" underline my-2 text-md text-gray-700"> ${data.salery}</a>
                                </div>
                           
                            </div>
                            <div className="col-span-1 ... flex">
                                <div className="heading mt-7 ml-10">
                                    <AiOutlineEllipsis size={32} />
                                </div>
    
                            </div>
                        </div>
                        );
                    })}
                    {/* <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-10">
                                <a href="/" className=" underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-10">
                                <a href="/" className=" underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8">
                                <a href="/" className="ml-10 underline my-2 text-md text-center text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ">
                                <a href="/" className="ml-10 underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="ml-10 heading mt-7">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-10">
                                <a href="/" className=" underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-10">
                                <a href="/" className=" underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex ">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5 ml-4 flex">
                                <img className="h-16 rounded-lg w-16" src="/rose.jpg" alt="Girl in a jacket" />
                                <p className="ml-8 mt-4 text-md font-extrabold   text-black">Bat on Hearts</p>
                            </div>
                        </div>
                        <div className="col-span-1 ...">
                            <div className="mt-8 mb-5">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a>

                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-16">
                                <a href="/" className=" underline my-2 text-md text-gray-700">Available</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-8 ml-10">
                                <a href="/" className=" underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>

                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading mt-7 ml-10">
                                <AiOutlineEllipsis size={32} />
                            </div>

                        </div>
                    </div> */}


                </div>
            </div>
        </>


    )
}
