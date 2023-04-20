import * as React from 'react'
import { AxiosInstance } from '../utils'
import { useForm } from "react-hook-form";
import MyDropzone from '../components/DropZone.js'
export default function AddArtwork() {
    const [files, setFiles] = React.useState([]);

    React.useEffect(() => {
        async function getData() {
            const data = await AxiosInstance(
                {
                    'url': '/hi',
                    'method': 'get'
                }
            )
        }
        getData()
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleImages = {
        files,
        setFiles,
    }
    return (

        <>

            <div className="max-[612px]:pt-8 pt-20 sm:ml-48 min-[612px]:top-20 bg-gray-200 h-full " >

                <h2 className="dark:text-black text-3xl  mb-4 px-6" >Add Artwork</h2>
                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <h2 className="text-sm font-bold text-black mb-4">Upload Image</h2>


                    <MyDropzone {...handleImages} multiple={false} />


                    <div className="w-full">
                        <form className='min-[480px]:grid grid-cols-2 gap-12' onSubmit={handleSubmit(onSubmit)} id="artWorkForm">
                            <div className="">

                                <div className="w-full mt-12   bg-white dark:bg-white dark:border-blue-600">

                                    <input  {...register("Title", { required: true })} type="text" className="flex items-center justify-between border-2 italic border-blue-200 text-lg rounded-b-none divide-blue-400 sm:divide-x dark:divide-blue-400 w-full text-black bg-white focus:outline-0  rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" defaultValue="" placeholder='Add Title' />
                                   
                                    <div className="px-4 py-2 border-l-2 border-r-2 border-b-2 border-blue-200 bg-white rounded-b-lg dark:bg-gray-800">
                                        <textarea {...register("Description", {
                                            required: true,
                                        })}

                                            id="editor" rows="4" className="border-none block italic w-full px-0 focus:outline-0 text-md text-gray-800 bg-white focus:ring-0 dark:text-white dark:placeholder-gray-700" placeholder="Add Description" ></textarea>

                                    </div>
                                    {errors.Title && <span className='text-red-500'>This filed is required </span>}
                                    {errors.Description && <span className='text-red-500'> This field is required</span>}
                                    
                                </div>

                                <h2 className="mb-2 text-sm font-bold text-gray-700 dark:text-white pt-5 ml-5">Type</h2>
                                {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownDelay" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Painting<svg className="ml-96 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700">
                                    <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div> */}

                                <select defaultValue="" {...register("Type", {
                                    required: true
                                })}
                                    className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 customSelect" >
                                    <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" selected >Painting</option>
                                </select>
                                {errors.Type && <span className='text-red-500'>This field is required</span>}
                                <input {...register("acrylicAndOil", {
                                    required: true
                                })}
                                    type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" defaultValue="Acrylic and Oil on Canvas" />
                                {errors.acrylicAndOil && <span className='text-red-500'>This field is required</span>}

                                <input {...register("natureExpression", {
                                    required: true
                                })}
                                    type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" defaultValue="Nature, Expression" />
                                {errors.natureExpression && <span className='text-red-500'>This filed is required</span>}

                                <input type="text" {...register("Inventory", {
                                    required: true
                                })} className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" defaultValue="Your Inventory " />
                                {errors.Inventory && <span className='text-red-500'>This field is required</span>}

                                <div className="min-[480px]:grid grid-cols-2 gap-12 mt-8">
                                    <div className="">
                                        <p className="text-sm font-bold text-gray-700 ml-5">Creation Date</p>
                                        <div className="inline-flex mr-4 mt-4 mb-4">
                                            <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-12" placeholder='M' />


                                            <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-12" placeholder='D' />

                                            <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" placeholder='YY' />

                                        </div>
                                        <p className="text-sm font-bold text-gray-700 ml-5">Signature</p>
                                        <input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold  text-md   dark:bg-blue-600" name="medium" />
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-bold text-gray-700 ml-4 min-[480px]:mt-2">Visibility</p>
                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay2" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Private<svg className="ml-28 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdownDelay2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <div className="">

                                <p className="text-sm font-bold text-gray-700 ml-5 mt-8">Dimensions</p>

                                <div className="inline-flex mr-4">
                                    <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-800 font-bold py-2 px-4 rounded-l-lg w-14" placeholder='69' />

                                    <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-800 font-bold py-2 px-4 w-14" placeholder='90' />

                                    <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-800 font-bold py-2 px-4  rounded-r-lg w-14" placeholder='D' />

                                </div>
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownDelay3" className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Inches<svg className="w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdownDelay3" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>

                                    </ul>
                                </div>


                                <p className="text-sm font-bold text-blue-500 ml-2 mt-8 mb-6">+ Add Framed Size</p>
                                <p className="text-sm font-bold text-gray-700 mt-6 ml-5">Status</p>

                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownDelay4" className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md pl-2 py-2.5 pr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Available <svg className="ml-16 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdownDelay4" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>

                                    </ul>
                                </div>
                                <input type="text" className="max-[768px]:ml-0 max-[1024px]:ml-1 ml-6 mr-6 text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 w-36" name="medium" defaultValue="8,500.00" />
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownDelay5" className=" text-black  border-2 border-blue-200 mt-3  pr-5 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">USD<svg className="ml-8 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdownDelay5" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mt-6 w-full mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">

                                    <input type="text" className="flex items-center justify-between border-b-2 border-t-none italic border-blue-200 text-lg rounded-b-none divide-blue-400 sm:divide-x dark:divide-blue-400 w-full text-black bg-white focus:outline-0  rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="add_tag" defaultValue="Add Tags" />
                                    <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">

                                        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">
                                            <li className="mr-2">
                                                <a href="/" className="mt-2 inline-block px-4 py-2 text-white bg-blue-600 rounded-full " aria-current="page">Yellow</a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="/" className=" mt-2 inline-block px-4 py-2 text-white bg-blue-600 rounded-full " aria-current="page">Red</a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="/" className="mt-2 inline-block px-4 py-2 text-white bg-blue-600 rounded-full " aria-current="page">Black</a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="/" className="mt-2 inline-block px-4 py-2 text-white bg-blue-600 rounded-full " aria-current="page">Bat</a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="/" className="mt-2 inline-block px-4 py-2 text-white bg-blue-600 rounded-full " aria-current="page">Adam Handler</a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-gray-700 mt-6 ml-5 ">Editions</p>
                                <input type="checkbox" className="max-[768px]:mb-6 min-[480px]:max-[992px]:mt-0  ml-10 mr-10 text-blue-500  border-2 border-blue-500 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold text-md   dark:bg-blue-600" name="medium" />
                                <input className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold w-14 rounded-lg text-md py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6 min-[480px]:mr-1 max-[992px]:mr-1 " type="text" defaultValue="13"></input>
                                /
                                <input className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold w-14 rounded-lg text-md py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-6 min-[480px]:ml-1 max-[992px]:ml-1" type="text" defaultValue="50"></input>
                            </div>
                        </form>


                    </div>

                    <div className="row form-action-row">
                        <div className="col float-right ml-5"><button className='btn btn-success btn-form btn-form-submit' form="artWorkForm" onClick={() => {

                        }}>Submit</button></div>
                        <div className="col float-right "><button className='btn btn-success btn-form btn-form-cancel'>Cancel</button></div>

                    </div>

                </div>
            </div>

        </>
    )
}
