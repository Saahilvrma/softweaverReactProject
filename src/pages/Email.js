import React from 'react'
import { IoFilterOutline } from "react-icons/io5";
import { FiRotateCw } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiInbox } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


export default function Email() {
    return (
        <>


            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-20 bg-gray-200 h-full min-[480px]:ml-40" >
                <div className="min-[480px]:grid grid-cols-6 ml-16">
                    <div className='min-[480px]:flex col-span-5 ...'>
                        <h2 className="dark:text-black text-3xl  mb-4 pl-6" >Email </h2>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative min-[480px]:ml-8  max-[480px]:ml-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-4 h-4 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="voice-search" className=" bg-blue-500 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1.5  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
                <hr className=" min-[480px]:ml-24 h-px my-2  bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                <div className="filters mb-4 min-[480px]:ml-16">

                    <div className='flex '>

                        <span className="text-sm font-semibold mr-4 ml-6 flex items-center"><IoFilterOutline /> Filter:</span>
                        <select className="text-sm font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Mark</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>

                        <span className="text-sm font-semibold mr-4 ml-4 flex items-center">< FiRotateCw size={18} /></span>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-0'>
                    <div className='col-span-1 w-8 ml-5 mt-6'>
                        <a href='/email/send'><HiOutlinePencil size={26} className='ml-2 my-6'/></a>              
                        <a href='/emails'><FiInbox size={26} className='ml-2 my-6'/></a>
                        <span className=''><FiFileText size={26} className='ml-2 my-6'/></span>
                        <span className=''><FiSend size={26} className='ml-2 my-6'/></span>
                        <span className=''><FiArchive size={26} className='ml-2 my-6'/></span>
                    </div>
                    <div className="col-span-11 p-4 border-1 border-blue-400 border-dashed mr-6  dark:border-blue-700 h-full top-20 bg-white">

                        <div className="mt-8  mr-2 mb-8">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                                    <thead className="text-sm underline text-gray-900  dark:text-gray-400">
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2"><input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2" >
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                            <td className="pl-0 pr-0 w-8 pb-2">
                                                <input type="checkbox" className="ml-6 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                            </td>
                                            <td className="pr-6  flex pb-2">
                                                <p className="ml-6 mt-4 ">Thumbtack</p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <p className="ml-6 mt-4 text-sm font-bold">Did you hire a pro for your illustrating project? <span className='font-normal text-gray-400'>illustrating Whats's the status of...</span></p>
                                            </td>
                                            <td className="px-6 pb-2">
                                                <span className='flex items-center mt-3'><span className='mr-2 fill-blue-500'><FaLock className='fill-blue-500' /></span>PRIVATE</span>
                                            </td>
                                            <td className="px-6 pb-2">
                                            <span className='font-bold'>8:57PM</span>
                                            </td>
                                        
                                        </tr>
                                        


                                    </tbody>
                                </table>
                                <hr className="min-[480px]:ml-8 h-px my-4 ml-16 bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                                <span className='flex justify-between'>
                                    <span className='flex items-center ml-8 '><span><FaAngleLeft/></span><span className='ml-2 font-bold'>Newer</span></span>
                                    <span className='ml-8 font-bold mr-2'>50-95 of 1,734</span>
                                    <span className='flex items-center'><span className='ml-8 font-bold mr-2'>Older</span><span><FaAngleRight/></span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
