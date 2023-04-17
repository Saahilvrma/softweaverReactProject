import * as React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";


export default function NewContact() {
   

    return (     
            <>
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
                                    <form method="post" >
                                        <div className=''>
                                            <div className="ml-12  inline-flex  mt-4 mb-4 w-full">
                                                <input type="text"  className=" bg-white leading-5 border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-600 py-2.5 px-8  pr-12 rounded-l-lg" placeholder='First Name'  name="username"
                                                id="validationCustom01" required/>
                                                  
                                                   
                                                <input type="text" className="bg-white leading-5 border-2 hover:bg-white border-blue-200 text-gray-600 py-2.5 px-7 " placeholder='Middle Name' required/>
                                                <input type="text" className="bg-white leading-5 border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-600  py-2.5 px-8  pr-12 rounded-r-lg" placeholder='Last Name' required/>
                                            </div>
                                            <div className="min-[480px]:grid grid-cols-6 gap-10 mt-4">
                                                <div className='col-span-3'>
                                                    <input type="text" className="ml-12  w-10/12 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Curator' />
                                                    <div className='flex mt-4 justify-between items-center'>
                                                        <span className='mt-6 mr-4'><IoMdMail size={30} color='gray' /></span>
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
                                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>
                                                    </div>
                                                    <div className='flex mt-4 justify-between items-center'>
                                                        <span className='mt-6 mr-4'><IoMdMail size={30} color='gray' /></span>
                                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownemail" data-dropdown-delay="500" className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>
                                                    </div>
                                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Email</p>
                                                    <div className='flex mt-2 justify-between items-center'>
                                                        <span className='mt-6 mr-4'><IoIosCall size={30} color='gray' /></span>
                                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownphone" data-dropdown-delay="500" className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>
                                                    </div>
                                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Phone Number</p>
                                                    <div className='flex mt-2 justify-between items-center'>
                                                        <span className='mt-6 mr-4'><IoIosLink size={30} color='gray' /></span>
                                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownsite" data-dropdown-delay="500" className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>
                                                    </div>
                                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Website</p>
                                                    <div className="ml-12 min-[480px]:grid grid-cols-2 gap-2 mt-8">
                                                        <div className="">
                                                            <p className="text-sm font-bold text-gray-700 ml-5">Birthday</p>
                                                            <div className="inline-flex mr-4 mt-4 mb-4">
                                                                <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-14" placeholder='M' />
                                                                <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-14" placeholder='D' />
                                                                <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" placeholder='YY' />
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-sm font-bold text-gray-700 ml-5">Death Date</p>
                                                            <div className="inline-flex mr-4 mt-4 mb-4">
                                                                <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-14" placeholder='M' />
                                                                <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-14" placeholder='D' />
                                                                <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" placeholder='YY' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-span-3'>
                                                    <input type="text" className="ml-12 w-10/12  bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Hauser & Wirth' />
                                                    <div className='flex mt-2'>
                                                        <span className='mt-6 mr-4'><IoIosHome size={30} color='gray' /></span>
                                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownaddress" data-dropdown-delay="500" className="h-10 mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Work <svg className="ml-8 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                                            <input type="text" className="w-full text-black bg-white border-b-2 border-l-2  border-r-2  border-t-2 border-blue-200 focus:outline-0  italic rounded-t-lg text-md px-4 py-2 " name="add_tag" placeholder="Street address line 1" />
                                                            <input type="text" className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200  focus:outline-0  italic  text-md px-4 py-2" name="add_tag" placeholder="Street address line 2" />
                                                            <input type="text" className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200 focus:outline-0  italic  text-md px-4 py-2" name="add_tag" placeholder="New York" />
                                                            <input type="text" className="bg-white border-l-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-r-none w-1/2" placeholder="NY" />
                                                            <input type="text" className="bg-white border-r-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-l-none w-1/2" placeholder="10011" />
                                                        </div>
                                                        <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>
                                                    </div>
                                                    <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Address</p>
                                                    <div className="min-[480px]:ml-12 mt-6 w-10/12 mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">
                                                        <div className="flex items-center justify-between px-3 py-2 border-b-2  border-blue-200 ">
                                                            <div className="flex flex-wrap items-center divide-blue-400 sm:divide-x dark:divide-blue-400">
                                                                <div className="flex items-center space-x-1 sm:pr-4 rounded-xl">
                                                                    <input type="text" className="w-full text-black bg-white  focus:outline-0  italic rounded-lg text-lg px-4 py-1 border-none" name="add_tag" placeholder="Add Tags" />
                                                                    <span className='mt-3 ml-12 '><IoIosCheckmarkCircleOutline size={28} color='DodgerBlue' /></span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">
                                                            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-8">
                                                                <li className="mr-2">
                                                                    <a href="/" className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Buyer</a>
                                                                </li>
                                                                <li className="mr-2">
                                                                    <a href="/" className="inline-block px-4 py-2 text-black bg-amber-300 rounded-full active" aria-current="page">LGBTQ Friendly</a>
                                                                </li>
                                                                <li className="">
                                                                    <a href="/" className="inline-block px-4 py-2 text-white bg-red-400 rounded-full active" aria-current="page">Modren</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <button  type="submit" className="ml-12 flex items-center gap-1 p-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800">
                                                      Add contact
                                                    </button>




                                                </div>

                                            </div>

                                        </div>
                                    </form>
                               
                            </div>
                        </div>


                    </div>


                </div>
            </div>


        </>
    )

}
