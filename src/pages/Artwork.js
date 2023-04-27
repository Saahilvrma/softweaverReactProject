import * as React from 'react'

import { Modal } from 'flowbite-react';
import { FaThList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdViewAgenda } from "react-icons/md";
import GallerySlider from '../components/GallerySlider';
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";



export default function Artwork() {
    const [showModal, setShowModal] = React.useState(false);
    const [getResult, setResult] = React.useState([]);
    const handleOnClick = () => {
        setShowModal(true)
    }
    const handleOnClose = () => {
        setShowModal(false)
    }

    const fetchInfo = () => {
        return axios.get('http://127.0.0.1:3000/api/v1/get-artwork').then((res) => setResult(res.data));
    };

    React.useEffect(() => {
        fetchInfo();
    }, []);


    // console.log(getResult.data)
    return (

        <>

            <div className="pt-10 sm:ml-48 top-20 bg-gray-200 h-full" >
                <div className="grid grid-cols-6">
                    <div className='flex col-span-5 ...'>
                        <h2 className="dark:text-black text-4xl  mt-2 px-6 " >Pieces</h2>
                        <a href="/artwork" className='mt-7 mr-3'><MdViewAgenda size={19} /></a>
                        <a href="/artwork/grid" className='mt-7 mr-3'><FaThLarge /></a>
                        <a href="/artwork/listing" className='mt-7 mr-3'><FaThList /></a>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full ml-8 mt-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-4 h-4 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="voice-search" className="bg-blue-500 border-2 border-blue-500 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1.5  text-white placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:bg-blue-500 hover:bg-blue-500 dark:bg-blue-500 dark:text-white" placeholder="Yellow Bat" required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg className="h-5 w-5  text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className='col-span-1 ...'>
                        <div className="relative w-full mt-4">

                            <a href="/artwork/create">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-blue-500 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                                <input type="text" id="voice-search" className="cursor-pointer w-32 bg-transparent border-2 border-blue-500 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1  placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="New Piece" readOnly />
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
                    {getResult.data && getResult.data.map((data, index) => { console.log(data.image);
                        return (
                            <>
                            <div className="grid grid-cols-6 gap-6 relative cursor-pointer" onClick={handleOnClick}>
                                <div className="col-span-1 ...">
                                    <div className="mt-5 mb-5 ml-4">
                                        <img className="h-40 rounded-lg w-64" src={data.image[0] ? data.image[0] : '/rose.jpg'} alt="Girl in a jacket" />

                                    </div>
                                </div>
                                <div className="col-span-2 ...">
                                    <div className="mt-5 mb-5">
                                        <h2 className="text-2xl font-extrabold dark:text-white">{data.Title}</h2>
                                        <p className="my-2 text-md text-gray-700 mb-16">{data.Description}</p>
                                        <a href="/" className="underline my-2 text-md text-gray-700">{data.acrylicAndOil}</a> | <a href="/" className="underline my-2 text-md text-gray-700">{data.availability}</a> | <a href="/" className="underline my-2 text-md text-gray-700">${data.salery}</a>
                                    </div>
                                </div>
                                <div className="col-span-1 ... flex types">
                                    <div className="heading">
                                        <p className="mt-12 text-md font-extrabold   text-black">Type</p>
                                        <p className="mt-2 text-md font-extrabold text-black">Size({data.dimensionType})</p>
                                        <p className="mt-2 text-md font-extrabold text-black">Subject</p>
                                        <p className="mt-2 text-md font-extrabold text-black">Location</p>
                                    </div>
                                    <div className="data">
                                        <p className="mt-14 text-sm  text-black ml-3">{data.Type}</p>
                                        <p className="mt-3 text-sm  text-black ml-3">{data.dimensionHeight}h x {data.dimensionWidth}w</p>
                                        <p className="mt-2 text-sm  text-black ml-3">{data.natureExpression}</p>
                                        <p className="mt-2 text-sm  text-black ml-3">{data.Inventory}</p>
                                        
                                    </div>
                                </div>

                                <div className="ml-16  col-span-2 ... flex">
                                    <ul className="mt-10 mr-5 flex absolute bottom-0  flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">
                                        {data.tags && data.tags.map((tag, index) => {
                                            return (
                                                <li className="mr-2 mt-2">
                                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">{tag.text}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="mt-5 absolute right-0 top-0">
                                        <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <svg className="mt-4 h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                                    </div>
                                </div>
                            </div>
                                <Modal show={showModal} size="4xl" onClose={handleOnClose}>                    
                                    <Modal.Body>
                                        <div className="space-y-6">

                                            <div className="grid grid-cols-4 ">

                                                <div className="col-span-2 ...">
                                                    <div className="mt-7 mb-5 ml-2">
                                                        <GallerySlider />
                                                    </div>
                                                </div>
                                                <div className="col-span-2 ...">
                                                    <div className="mt-5 mb-5 ml-8">

                                                        <span className='flex'><p className='text-lg font-extrabold ml-2'>{data.Title}</p>
                                                            <span className='top-5 right-12 absolute cursor-pointer'> <FiEdit2 /></span>
                                                            <span className='top-4 right-4 absolute cursor-pointer' color="gray" onClick={handleOnClose}>X</span>
                                                        </span>
                                                        <p className='text-sm ml-2'>{data.Description}</p>

                                                        <div className="mt-6 mb-4">
                                                            <a href="/" className="underline text-sm ml-2 mt-8">{data.acrylicAndOil}</a> | <a href="/" className="underline mt-8 text-sm">{data.availability}</a> | <a href="/" className="underline mt-8 text-sm ">${data.salery}</a>
                                                        </div>
                                                        <div className="ml-2 flex">
                                                            <div className="heading">
                                                           
                                                                <p className="mt-2 text-sm font-extrabold   text-black">Type</p>
                                                                <p className="mt-2 text-sm font-extrabold text-black">Size(inches)</p>
                                                                <p className="mt-2 text-sm font-extrabold text-black">Subject</p>
                                                                <p className="mt-2 text-sm font-extrabold text-black">Location</p>
                                                            </div>
                                                            <div className="data">
                                                                <p className="mt-2 text-sm  ml-3">{data.Type}</p>
                                                                <p className="mt-2 text-sm  ml-3">{data.dimensionWidth}w x {data.dimensionHeight}h</p>
                                                                <p className="mt-2 text-sm  ml-3">{data.natureExpression}</p>
                                                                <select className="text-sm bg-transparent border-none" >
                                                                    <option>{data.Inventory}</option>
                                                                    <option>One</option>
                                                                    <option>Two</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <ul className="mt-4 ml-2 flex flex-wrap text-sm text-center text-gray-500 dark:text-gray-400 mb-14">
                                                            {data.tags && data.tags.map((tag, index) => {
                                                                return (
                                                                    <li className="mr-2 mt-2">
                                                                        <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">{tag.text}</a>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                   
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </Modal.Body>                                   
                                </Modal>
                            </>
                        );
                    })}


                   

                    {/* <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-1 ...">
                            <div className="mt-5 mb-5 ml-4">
                                <img className="h-40 rounded-lg w-64" src="/rose.jpg" alt="Girl in a jacket" />

                            </div>
                        </div>
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5">
                                <h2 className="text-3xl font-extrabold dark:text-white">Bat on Hearts</h2>
                                <p className="my-2 text-md text-gray-700 mb-16">No Description</p>
                                <a href="/" className="underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a> | <a href="/" className="underline my-2 text-md text-gray-700">Available</a> | <a href="/" className="underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading">
                                <p className="mt-14 text-md font-extrabold   text-black">Type</p>
                                <p className="mt-2 text-md font-extrabold text-black">Size(inches)</p>
                                <p className="mt-2 text-md font-extrabold text-black">Subject</p>
                                <p className="mt-2 text-md font-extrabold text-black">Location</p>
                            </div>
                            <div className="data">
                                <p className="mt-14 text-md  text-black ml-3">Painitng</p>
                                <p className="mt-2 text-md  text-black ml-3">69w x 90h</p>
                                <p className="mt-2 text-md  text-black ml-3">Nature,exoresion</p>
                                <select className="text-md text-black bg-transparent border-none" >
                                    <option>Your Inventory</option>
                                    <option>One</option>
                                    <option>Two</option>
                                </select>
                            </div>
                        </div>

                        <div className="ml-16 mt-12 col-span-2 ... flex">
                            <ul className="mt-10 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Yellow</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Red</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Black</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Bat</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Adam Handler</a>
                                </li>
                            </ul>
                            <div className="">
                                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <svg className="mt-4 h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-1 ...">
                            <div className="mt-5 mb-5 ml-4">
                                <img className="h-40 rounded-lg w-64" src="/rose.jpg" alt="Girl in a jacket" />

                            </div>
                        </div>
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5">
                                <h2 className="text-3xl font-extrabold dark:text-white">Bat on Hearts</h2>
                                <p className="my-2 text-md text-gray-700 mb-16">No Description</p>
                                <a href="/" className="underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a> | <a href="/" className="underline my-2 text-md text-gray-700">Available</a> | <a href="/" className="underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading">
                                <p className="mt-14 text-md font-extrabold   text-black">Type</p>
                                <p className="mt-2 text-md font-extrabold text-black">Size(inches)</p>
                                <p className="mt-2 text-md font-extrabold text-black">Subject</p>
                                <p className="mt-2 text-md font-extrabold text-black">Location</p>
                            </div>
                            <div className="data">
                                <p className="mt-14 text-md  text-black ml-3">Painitng</p>
                                <p className="mt-2 text-md  text-black ml-3">69w x 90h</p>
                                <p className="mt-2 text-md  text-black ml-3">Nature,exoresion</p>
                                <select className="text-md text-black bg-transparent border-none" >
                                    <option>Your Inventory</option>
                                    <option>One</option>
                                    <option>Two</option>
                                </select>
                            </div>
                        </div>

                        <div className="ml-16 mt-12 col-span-2 ... flex">
                            <ul className="mt-10 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Yellow</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Red</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Black</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Bat</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Adam Handler</a>
                                </li>
                            </ul>
                            <div className="">
                                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <svg className="mt-4 h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-1 ...">
                            <div className="mt-5 mb-5 ml-4">
                                <img className="h-40 rounded-lg w-64" src="/rose.jpg" alt="Girl in a jacket" />

                            </div>
                        </div>
                        <div className="col-span-2 ...">
                            <div className="mt-5 mb-5">
                                <h2 className="text-3xl font-extrabold dark:text-white">Bat on Hearts</h2>
                                <p className="my-2 text-md text-gray-700 mb-16">No Description</p>
                                <a href="/" className="underline my-2 text-md text-gray-700">Acrylic and Oil Canvas</a> | <a href="/" className="underline my-2 text-md text-gray-700">Available</a> | <a href="/" className="underline my-2 text-md text-gray-700">$8,500.00</a>
                            </div>
                        </div>
                        <div className="col-span-1 ... flex">
                            <div className="heading">
                                <p className="mt-14 text-md font-extrabold   text-black">Type</p>
                                <p className="mt-2 text-md font-extrabold text-black">Size(inches)</p>
                                <p className="mt-2 text-md font-extrabold text-black">Subject</p>
                                <p className="mt-2 text-md font-extrabold text-black">Location</p>
                            </div>
                            <div className="data">
                                <p className="mt-14 text-md  text-black ml-3">Painitng</p>
                                <p className="mt-2 text-md  text-black ml-3">69w x 90h</p>
                                <p className="mt-2 text-md  text-black ml-3">Nature,exoresion</p>
                                <select className="text-md text-black bg-transparent border-none" >
                                    <option>Your Inventory</option>
                                    <option>One</option>
                                    <option>Two</option>
                                </select>
                            </div>
                        </div>

                        <div className="ml-16 mt-12 col-span-2 ... flex">
                            <ul className="mt-10 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Yellow</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Red</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Black</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Bat</a>
                                </li>
                                <li className="mr-2 mt-2">
                                    <a href="/" className="inline-block px-4 py-1.5 text-white bg-blue-600 rounded-full  " aria-current="page">Adam Handler</a>
                                </li>
                            </ul>
                            <div className="">
                                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <svg className="mt-4 h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}
