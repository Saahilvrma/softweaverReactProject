import React from 'react'

export default function Settings() {
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
                <h2 className="dark:text-black text-3xl  mb-6 px-6" >Settings</h2>
            
            </div>
        
        </div>
       


        <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
            <div className="m-20 mt-44" >

                <div className='grid grid-cols-6 gap-4'>
                    <div className='col-span-3 flex'>
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
