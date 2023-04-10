import React from 'react'
import { FaThList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdViewAgenda } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function ArtworkListing() {
    return (
        <>


            <nav className="min-[320px]:invisible min-[620px]:visible bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between ">
                    <h2 className="text-2xl font-bold dark:text-black text-blue-600">Art Index</h2>
                </div>
            </nav>

            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 mb-2 ml-3 text-sm text-gray-500  md:hidden border-none focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>

                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>

            </button>


            <aside id="sidebar-multi-level-sidebar" className="fixed bg-white-50 min-[612px]:top-20 max-[612px]:mt-12 min-[612px]:pt-14  left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

                <div className="h-full px-3  overflow-y-auto bg-white-50 dark:bg-white-800">
                    <ul className="space-y-2 bg-white-50">
                        <li>
                            <a href="/artwork/create" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                                <span className="ml-3">Artwork</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Locations</span>

                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">Exhibitions</span>

                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="3" width="16" height="18" rx="2" />  <rect x="8" y="7" width="8" height="3" rx="1" />  <line x1="8" y1="14" x2="8" y2="14.01" />  <line x1="12" y1="14" x2="12" y2="14.01" />  <line x1="16" y1="14" x2="16" y2="14.01" />  <line x1="8" y1="17" x2="8" y2="17.01" />  <line x1="12" y1="17" x2="12" y2="17.01" />  <line x1="16" y1="17" x2="16" y2="17.01" /></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Schedule</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="4" width="18" height="16" rx="3" />  <circle cx="9" cy="10" r="2" />  <line x1="15" y1="8" x2="17" y2="8" />  <line x1="15" y1="12" x2="17" y2="12" />  <line x1="7" y1="16" x2="17" y2="16" /></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">Income</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">Reports</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">My Docs</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-sm font-semibold text-black-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Insights</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
            <h2 className="text-2xl font-bold ml-4 inline dark:text-black text-blue-600 Max-[620px]:visible">Art Index</h2>

            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-20 bg-gray-200 h-full" >
            <div className="grid grid-cols-6">
                    <div className='flex col-span-5 ...'>
                        <h2 className="dark:text-black text-4xl  mt-2 px-6 " >Pieces</h2>
                        <span className='mt-7 mr-3'><MdViewAgenda size={19} /></span>
                        <span className='mt-7 mr-3'><FaThLarge /></span>
                        <span className='mt-7 mr-3'><FaThList /></span>
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

                            <a href="/sidebar">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-blue-500 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                                <input type="text" id="voice-search" className="w-32 bg-transparent border-2 border-blue-500 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="New Piece" readOnly />
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
                    <div className="min-[480px]:grid grid-cols-6 gap-6">
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
                    </div>


                </div>
            </div>
        </>


    )
}
