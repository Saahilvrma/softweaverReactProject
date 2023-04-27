import React from 'react'
import { IoFilterOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

export default function Contacts() {
    const [getResult, setResult] = React.useState([]);



    const fetchInfo = () => {
        return axios.get('http://127.0.0.1:3000/api/v1/get-contacts').then((res) => setResult(res.data));
    };

    React.useEffect(() => {
        fetchInfo();
    }, []);




    return (
        <>


            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-10 bg-gray-200 h-full" >
                <div className="min-[480px]:grid grid-cols-6">
                    <div className='min-[480px]:flex col-span-5 ...'>
                        <h2 className="dark:text-black text-3xl  mb-4 px-6" >Contacts <span className='text-sm'> (24)</span></h2>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative min-[480px]:ml-8  max-[480px]:ml-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-4 h-4 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="voice-search" className=" bg-blue-500 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1.5  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NYC" required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className='col-span-1 ...'>
                        <div className="relative w-full mt-2  max-[480px]:ml-4">
                            <a href="/contact/create">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-blue-500 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                                <input type="text" id="voice-search" className="cursor-pointer w-32 bg-transparent border-2 border-blue-500 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-8 p-1  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="New Contact" readOnly />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-24">

                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="min-[480px]:ml-5 h-px my-2 bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                <div className="filters mb-4">

                    <div className='min-[480px]:flex '>
                        <input type="text" id="voice-search" className="ml-8 w-36 placeholder-gray-400 bg-transparent border-2 border-gray-300 text-gary text-sm rounded-full focus:ring-gary-400 focus:border-gray-400 block  pl-7 pr-7 p-1  placeholder-text-gray dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Group Email" readOnly />

                        <span className="text-sm font-semibold mr-4 ml-6 flex items-center"><IoFilterOutline /> Filter:</span>
                        <select className="text-sm font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Relation</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Group</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Location</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>

                    </div>
                </div>


                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <div className="mt-8 ml-2 mr-2 mb-8">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-sm underline text-gray-900  dark:text-gray-400">
                                    <tr>
                                        <th></th>
                                        <th scope="col" className="px-2 py-3 ">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Company
                                        </th>
                                        <th scope="col" className="px-6 py-3">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base font-bold   text-black">Rose Wells</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Rose.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Curator
                                        </td>
                                        <td className="px-6 py-4">
                                            Hauser & Wirth
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base font-bold   text-black">Dexter Jamer</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (280)610-8358
                                        </td>
                                        <td className="px-6 py-4">
                                            Director
                                        </td>
                                        <td className="px-6 py-4">
                                            Gagosian
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base font-bold   text-black">Harley Harris</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Curator
                                        </td>
                                        <td className="px-6 py-4">
                                            Hauser & Wirth
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base font-bold   text-black">Charlie Lewis</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Curator
                                        </td>
                                        <td className="px-6 py-4">
                                            Hauser & Wirth
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base font-bold   text-black">Liam Reynolds</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Registrar
                                        </td>
                                        <td className="px-6 py-4">
                                            David Zwirner
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 outline-none text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 focus:bg-blue-500 focus:text-blue-500 bg-white text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base  font-bold text-black">Trenton Hines</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Artist
                                        </td>
                                        <td className="px-6 py-4">
                                            McCormick Studios
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 outline-none text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 focus:bg-blue-500 focus:text-blue-500 bg-white text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base  font-bold text-black">Trenton Hines</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Artist
                                        </td>
                                        <td className="px-6 py-4">
                                            McCormick Studios
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 outline-none text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 focus:bg-blue-500 focus:text-blue-500 bg-white text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex">

                                            <img className="h-12 rounded-full w-12" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 mt-4 text-base  font-bold text-black">Trenton Hines</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            Mathew.Wells@AOl.com
                                        </td>
                                        <td className="px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="px-6 py-4">
                                            Artist
                                        </td>
                                        <td className="px-6 py-4">
                                            McCormick Studios
                                        </td>
                                        <td><span className=''> <FiEdit2 /> </span></td>
                                    </tr> */}




                                    {getResult.data && getResult.data.map((data, index) => {
                                        return (
                                            <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                                <td className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 outline-none text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 focus:bg-blue-500 focus:text-blue-500 bg-white text-md" name="medium" />
                                                </td>
                                                <td className="pr-6 py-4 flex">

                                                    <img className="h-12 rounded-full w-12" src={data.image ? data.image : '/rose.jpg'} alt="Girl in a jacket" />
                                                    <p className="ml-6 mt-4 text-base  font-bold text-black">{data.FirstName} {data.MiddleName} {data.LastName}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.Email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.PhoneNumber}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.Title}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.Company}
                                                </td>
                                                <td><span className=''> <FiEdit2 /> </span></td>
                                            </tr>
                                        );
                                    })}





                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
