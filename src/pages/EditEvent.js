import React from 'react'
import { IoIosHome } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoReader } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";

export default function EditEvent() {
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

            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-10 bg-gray-200 h-full" >
                <div className="min-[480px]:grid grid-cols-6">
                    <div className='min-[480px]:flex col-span-5 ...'>
                        <h2 className="dark:text-black text-3xl  mb-4 px-6" >Edit Event</h2>
                    </div>                
                </div>
                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <div className="m-20">
                        <form>
                            <label className='mt-5 ml-12 block mb-2 text-sm font-bold text-gray-500 dark:text-white'>Title</label>
                            <input type="text" className="ml-12 w-11/12 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Bat on Hearts Loan Ends'/>
                            <div className='min-[480px]:grid grid-cols-12'>
                                <div className='col-span-7 ..'>
                                    <div className='ml-12 flex mt-5'>
                                    <input type="text" className="w-28 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-3" placeholder='Feb 15,2020'/>
                                    <input type="text" className="w-24 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-3" placeholder='7:30pm'/>
                                    <p className='mr-3 mt-3 text-sm font-bold text-gray-500'>to</p>     
                                    <input type="text" className="w-24 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-3" placeholder='8:00pm'/>
                                    <input type="text" className="w-28 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg mr-2" placeholder='Feb 15,2020'/>
                                    </div>
                                    <div className='flex mt-5 '>   <span className='mt-2 mr-4'><IoIosHome size={28} color='gray'/></span>
                                    <input type="text" className="w-full bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Hauser Wirth'/></div>
                                    
                                    <label htmlFor="message" className="mt-5 ml-12 block mb-2 text-sm font-bold text-gray-500 dark:text-white">Description</label>
                                    <div className='flex'>
                                        <span className='mt-2 mr-4'><IoReader size={28} color='gray'/></span>
                                    
                                        <textarea id="message" rows="4" className="italic block p-2.5 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Description"></textarea>
                                    </div>
                                    <div className="ml-12 mt-6 w-11/12 mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">
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
                                                        <a href="/"  className="inline-block px-4 py-2 active text-black font-bold" aria-current="page">Bat on Heart</a>
                                                        <span className='mt-3 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    <li  className="mr-2 flex">
                                                        <img className="h-8 rounded-lg w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="inline-block px-4 py-2 active text-black font-bold" aria-current="page">Virtual Relief</a>
                                                        <span className='mt-3 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    <li  className="mt-4 mr-2 flex">
                                                        <img className="h-8 rounded-lg w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="inline-block px-4 py-2 active text-black font-bold" aria-current="page">Personality Inventory #1</a>
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
                                                        <a href="/"  className="mt-2 inline-block px-4 py-2 active text-black font-bold" aria-current="page">Rose Wells</a>
                                                        <span className='mt-5 mr-4'> <RxCross2/></span>
                                                    </li>
                                                    <li className="mr-2 flex">
                                                        <img className="h-8 rounded-full w-8 mt-3" src="/rose.jpg" alt="Girl in a jacket" />
                                                        <a href="/"  className="mt-2 inline-block px-4 py-2 active text-black font-bold" aria-current="page">Dexter James</a>
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
