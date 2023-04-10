import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
// import 'flowbite';

export default function NewContact() {
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
                <h2 className="dark:text-black text-3xl  mb-4 px-6" >New Contact</h2>
            </div>
        </div>
       

        <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
            <div className="mt-16 ml-16 mr-16 mb-16">

                <div className="">
                    <div className=" inline-flex">
                        <img className="w-28 h-28 rounded-full" src="/rose.jpg" alt="Girl in a jacket" />
                        <div className=''>
                            <div className="ml-12  inline-flex  mt-4 mb-4 w-full">
                                <input type="text" className=" bg-white leading-5 border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-600 py-2.5 px-8  pr-12 rounded-l-lg" placeholder='First Name'/>
                            
                                <input type="text" className="bg-white leading-5 border-2 hover:bg-white border-blue-200 text-gray-600 py-2.5 px-7 " placeholder='Middle Name'/>
                                
                                <input type="text" className="bg-white leading-5 border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-600  py-2.5 px-8  pr-12 rounded-r-lg" placeholder='Last Name'/>
                            
                            </div>
                            <div className="grid grid-cols-6 gap-10 mt-4">
                                <div className='col-span-3'>
                                    <input type="text" className="ml-12  w-10/12 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Curator'/>
                                  
                                    <div className='flex mt-4 justify-between items-center'>
                                        <span className='mt-6 mr-4'><IoMdMail size={30} color='gray'/></span>
                                        <div>
                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownemail" data-dropdown-delay="500" className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Personal <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdownemail" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Work</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>

                                            </ul>
                                        </div>
                                        </div>
                                        <input type="text" className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500  rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2" name="medium" placeholder="E-mail" /> 
                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue'/></span>
                                    </div>
                                    <div className='flex mt-4 justify-between items-center'>
                                        <span className='mt-6 mr-4'><IoMdMail size={30} color='gray'/></span>
                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownemail" data-dropdown-delay="500"  className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdownemail" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personal</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>

                                            </ul>
                                        </div>
                                        <input type="text" className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60     ml-2" name="medium" placeholder="E-mail" /> 
                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue'/></span>
                                    </div>
                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Email</p>
                                    <div className='flex mt-2 justify-between items-center'>
                                        <span className='mt-6 mr-4'><IoIosCall size={30} color='gray'/></span>
                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownphone" data-dropdown-delay="500"  className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdownphone" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personal</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>

                                            </ul>
                                        </div>
                                        <input type="text" className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500  rounded-lg text-md px-4 dark:bg-blue-600 w-60  ml-2" name="medium" placeholder="Phone Number" /> 
                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue'/></span>
                                    </div>
                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Phone Number</p>
                                    <div className='flex mt-2 justify-between items-center'>
                                        <span className='mt-6 mr-4'><IoIosLink size={30} color='gray'/></span>
                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownsite" data-dropdown-delay="500"  className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdownsite" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personal</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>

                                            </ul>
                                        </div>
                                        <input type="text" className="w-64 text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500  rounded-lg text-md px-4 dark:bg-blue-600 ml-2" name="medium" placeholder="Website" /> 
                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue'/></span>
                                    </div>
                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Website</p>
                                    <div className="ml-12 grid grid-cols-2 gap-2 mt-8">
                                        <div className="">
                                            <p className="text-sm font-bold text-gray-700 ml-5">Birthday</p>
                                            <div className="inline-flex mr-4 mt-4 mb-4">
                                                <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-14" placeholder='M'/>
                                                <input type="text"  className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-14" placeholder='D'/>                  
                                                <input type="text"  className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" placeholder='YY'/>           
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-bold text-gray-700 ml-5">Death Date</p>
                                            <div className="inline-flex mr-4 mt-4 mb-4">
                                                <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-14" placeholder='M'/>
                                                <input type="text"  className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-14" placeholder='D'/>                  
                                                <input type="text"  className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" placeholder='YY'/>           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-3'>
                                    <input type="text" className="ml-12 w-10/12  bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Hauser & Wirth'/>
                                    <div className='flex mt-2'>
                                        <span className='mt-6 mr-4'><IoIosHome size={30} color='gray'/></span>
                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownaddress" data-dropdown-delay="500"  className="h-10 mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdownaddress" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personal</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>

                                            </ul>
                                        </div>
                                        
                                        <div className="ml-2 mt-4">

                                            <input type="text" className="w-full text-black bg-white border-b-2 border-l-2  border-r-2  border-t-2 border-blue-200 focus:outline-0  italic rounded-t-lg text-md px-4 py-2 " name="add_tag" placeholder="Street address line 1"/>
                                            <input type="text" className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200  focus:outline-0  italic  text-md px-4 py-2" name="add_tag" placeholder="Street address line 2"/>
                                            <input type="text" className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200 focus:outline-0  italic  text-md px-4 py-2" name="add_tag" placeholder="New York"/>
                                            <input type="text" className="bg-white border-l-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-r-none w-1/2" placeholder="NY" />
                                            <input type="text" className="bg-white border-r-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-l-none w-1/2" placeholder="10011" />

                                        </div>
                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue'/></span>
                                    </div>
                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Address</p>
                                    <div className="ml-12 mt-6 w-10/12 mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">
                                        <div className="flex items-center justify-between px-3 py-2 border-b-2  border-blue-200 ">
                                            <div className="flex flex-wrap items-center divide-blue-400 sm:divide-x dark:divide-blue-400">
                                                <div className="flex items-center space-x-1 sm:pr-4 rounded-xl">                                       
                                                    <input type="text" className="w-full text-black bg-white  focus:outline-0  italic rounded-lg text-lg px-4 py-1 border-none" name="add_tag" placeholder="Add Tags" />
                                                    <span className='mt-3 ml-12 '><IoIosCheckmarkCircleOutline size={28} color='DodgerBlue'/></span>
                                                    
                                                </div>
                                            </div>          
                                        </div>
                                        <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">                          
                                            <ul  className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-8">
                                                <li  className="mr-2">
                                                    <a href="/"  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Buyer</a>
                                                </li>
                                                <li  className="mr-2">
                                                    <a href="/"  className="inline-block px-4 py-2 text-black bg-amber-300 rounded-full active" aria-current="page">LGBTQ Friendly</a>
                                                </li>
                                                <li  className="">
                                                    <a href="/"  className="inline-block px-4 py-2 text-white bg-red-400 rounded-full active" aria-current="page">Modren</a>
                                                </li>  
                                            </ul>
                                        </div>
                                    </div>

                                 


                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
             
            
            </div>
          
          
        </div>
    </div>


</>
  )
}
