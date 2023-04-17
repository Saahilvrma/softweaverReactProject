import React from 'react'
import { BsFilePlus } from "react-icons/bs";
import { BsFileEarmark } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { FiInbox } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function SendEmail() {
    return (
        <>



            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-20 bg-gray-200 h-full min-[480px]:ml-40" >
                <div className="min-[480px]:grid grid-cols-6 min-[480px]:ml-16">
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
                <hr className="min-[480px]:ml-24 h-px my-2  bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                <div className='min-[480px]:grid grid-cols-12 gap-0 mb-10'>
                    <div className='col-span-1 w-8 ml-5 mt-6 max-[480px]:flex'>
                        <a href='/email/send'><HiOutlinePencil size={26} className='ml-2 my-6' /></a>
                        <a href='/emails'><FiInbox size={26} className='ml-2 my-6' /></a>
                        <span className=''><FiFileText size={26} className='ml-2 my-6' /></span>
                        <span className=''><FiSend size={26} className='ml-2 my-6' /></span>
                        <span className=''><FiArchive size={26} className='ml-2 my-6' /></span>
                    </div>
                    <div className="col-span-11 max-[480px]:col-span-10 mb-10 p-4 border-1 border-blue-400 border-dashed mr-6  dark:border-blue-700 h-full top-20 bg-white">

                        <div className="mt-8  mr-2 mb-8">
                            <div className="ml-2 mt-4">

                                <form>
                                    <div className="w-full mb-4 border-2 border-blue-300 rounded-lg bg-gray-50 dark:bg-blue-500 dark:border-gray-600">
                                        <div className=" bg-white rounded-t-lg dark:bg-gray-800">
                                            <label htmlFor="comment" className="sr-only">Your comment</label>
                                            <input type="text" className="w-full text-black bg-white border-b-2 border-l-0  border-r-0  border-t-0 border-blue-200 focus:outline-0  italic rounded-t-lg text-md px-4 py-2 " name="to" placeholder="To: " />
                                            <input type="text" className="w-full text-black bg-white border-t-0 border-b-2  border-l-0  border-r-0 border-blue-200  focus:outline-0  italic  text-md px-4 py-2" name="subject" placeholder="Subject:" />
                                            <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                wrapperStyle={{ height: 300 }}
                                            />
                                        </div>
                                        <div className="min-[480px]:flex items-center justify-between px-3 border-t-2 border-blue-300 dark:border-blue-300">

                                            <div className="min-[480px]:flex pl-0 space-x-1 sm:pl-2">
                                                {/* <button type="button" className="inline-flex justify-center items-center p-1 text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    
                                                    <BsFileFont size={20} color='black'/>
                                                
                                                    <select className="text-sm font-bold text-black bg-transparent mr-6 border-none" >
                                                        <option>Formatting</option>
                                                        <option>One</option>
                                                        <option>Two</option>
                                                    </select>
                                                </button> */}
                                                <span className="inline-flex justify-center items-center p-1 text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <BsFileEarmark className='' size={20} color='black' />
                                                    <select className="text-sm font-bold text-black bg-transparent mr-6 border-none" >
                                                        <option>Template</option>
                                                        <option>One</option>
                                                        <option>Two</option>
                                                    </select>
                                                </span>
                                                <button type="button" className="inline-flex justify-center items-center p-1 text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <BsFilePlus size={20} color='black' />
                                                    <select className="text-sm font-bold text-black bg-transparent mr-6 border-none" >
                                                        <option>Fields</option>
                                                        <option>One</option>
                                                        <option>Two</option>
                                                    </select>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className='ml-2 mt-6 flex items-center justify-between'>
                                <button type="button" className="text-gray bg-transparent border-2 border-green-400 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-4 py-1 text-center mr-8 mb-2">Attach</button>
                                <span className='min-[480px]:flex'>
                                    <button type="button" className="text-white bg-slate-400 border-2 border-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500 font-medium rounded-full text-sm px-6 py-1 text-center mr-6 mb-2 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">Discard</button>
                                    <button type="button" className="text-white bg-green-400 border-2 border-green-400 focus:outline-none focus:ring-4 focus:ring-blue-500 font-medium rounded-full text-sm px-6 py-1 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">Send</button>
                                </span>
                            </div>
                            {/* <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        wrapperStyle={{ width: 800, border: "1px solid black" }}
                    /> */}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
