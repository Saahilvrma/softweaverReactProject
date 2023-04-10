import React from 'react'

export default function AddArtwork() {
  return (
    <>
    <div className="pt-20 sm:ml-48 top-20 bg-gray-200 h-full" >
                <h2 className="dark:text-black text-3xl  mb-4 px-6" >Add Artwork</h2>
                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <h2 className="text-sm font-bold text-black mb-4">Upload Image</h2>


                    <div className="grid grid-cols-4 gap-8 border-2 border-blue-500 rounded-md">

                        <div className="mt-5 mb-5 ml-8">
                            <img className="h-44 rounded-lg w-64" src="/rose.jpg" alt="Girl in a jacket" />

                        </div>
                        <div className="col-span-3 align-middle mt-5 mb-5 mr-8">
                            <a href="/" className="w-full flex flex-col items-center bg-white border-1 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-1200 dark:hover:bg-gray-700 ">
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center bg-blue-100 justify-center w-full h-34 border-2 border-blue-400  rounded-lg cursor-pointer  dark:hover:bg-blue-100 dark:bg-gray-700 hover:bg-blue-100 dark:border-gray-600 dark:hover:border-gray-500">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <p className="text-sm font-bold text-black">Drag and drop your art here to Add more Images</p>
                                            <p className="text-sm font-bold text-black dark:text-gray-400 my-6">or</p>
                                            <p className="text-white bg-blue-500 focus:ring-2 focus:ring-blue-500 font-medium rounded-full  px-7 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500 py-1.5">Choose a File</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* <a href="/" className="w-full flex flex-col items-center bg-white border-1 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-1200 dark:hover:bg-gray-700 ">
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center bg-blue-100 justify-center w-full h-34 border-2 border-blue-400  rounded-lg cursor-pointer  dark:hover:bg-blue-100 dark:bg-gray-700 hover:bg-blue-100 dark:border-gray-600 dark:hover:border-gray-500">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <p className="text-sm font-bold text-black">Drag and drop your art here to Add more Images</p>
                                    <p className="text-sm font-bold text-black dark:text-gray-400 my-6">or</p>
                                    <p className="text-white bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-7 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500 py-1.5">Choose a File</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </a> */}
                    <div className="w-full">
                        <form className='grid grid-cols-2 gap-12'>
                            <div className="">

                                <div className="w-full mt-12   bg-white dark:bg-white dark:border-blue-600">
                                    <div className="flex items-center justify-between px-3 py-2 border-2  border-blue-200 rounded-t-xl">
                                        <div className="flex flex-wrap items-center divide-blue-400 sm:divide-x dark:divide-blue-400">
                                            <div className="flex items-center space-x-1 sm:pr-4">
        
                                                <input type="text" className="w-full text-black bg-white focus:outline-0  font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="add_tag" defaultValue="Bat on Hearts" />
                                            </div>
                                        </div>
    
                                    </div>
                                    <div className="px-4 py-2 border-l-2 border-r-2 border-b-2 border-blue-200 bg-white rounded-b-lg dark:bg-gray-800">                          
                                        <textarea id="editor" rows="4" className="block italic w-full px-0 focus:outline-0 text-md text-gray-800 bg-white focus:ring-0 dark:text-white dark:placeholder-gray-700" placeholder="Add Description"></textarea>
                                    </div>
                                </div>
                                {/* <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white pt-5 ml-5 mt-5">Bat on Hearts</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Description"></textarea> */}
                                <h2 className="mb-2 text-sm font-bold text-gray-700 dark:text-white pt-5 ml-5">Type</h2>
                                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Painting<svg className="ml-96 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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
                                <input type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" defaultValue="Acrylic and Oil on Canvas" />
                                <input type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" defaultValue="Nature, Expression" />
                                <input type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" defaultValue="Your Inventory " />


                                <div className="grid grid-cols-2 gap-12 mt-8">
                                    <div className="">
                                        <p className="text-sm font-bold text-gray-700 ml-5">Creation Date</p>
                                        <div className="inline-flex mr-4 mt-4 mb-4">
                                            <button className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg">
                                                M
                                            </button>
                                            <button className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 ">
                                                D
                                            </button>
                                            <button className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg">
                                                YY
                                            </button>
                                        </div>
                                        <p className="text-sm font-bold text-gray-700 ml-5">Signature</p>
                                        <input type="checkbox" className="ml-10 mr-10 text-black  border-2 border-blue-500 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" />
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-bold text-gray-700 ml-4">Visibility</p>
                                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay2" data-dropdown-delay="500" data-dropdown-trigger="hover" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Private<svg className="ml-28 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                    <button className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-800 font-bold py-2 px-4 rounded-l-lg">
                                        69
                                    </button>
                                    <button className="bg-white border-2 hover:bg-white border-blue-200 text-gray-800 font-bold py-2 px-4 ">
                                        90
                                    </button>
                                    <button className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-800 font-bold py-2 px-4  rounded-r-lg">
                                        D
                                    </button>
                                </div>
                                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay3" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Inches<svg className="w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                
                                {/* <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small select</label>
                            <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Inches</option>
                            <option defaultValue="US">United States</option>
                            <option defaultValue="CA">Canada</option>
                            <option defaultValue="FR">France</option>
                            <option defaultValue="DE">Germany</option>
                            </select> */}
                                <p className="text-sm font-bold text-blue-500 ml-2 mt-8 mb-6">+ Add Framed Size</p>
                                <p className="text-sm font-bold text-gray-700 mt-6 ml-5">Status</p>

                                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay4" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 pr-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Available <svg className="ml-16 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                <input type="text" className="ml-6 mr-6 text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 w-36" name="medium" defaultValue="8,500.00" />
                                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay5" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" text-black  border-2 border-blue-200 mt-3  pr-5 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">USD<svg className="ml-8 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
                                    <div className="flex items-center justify-between px-3 py-2 border-b-2  border-blue-200 ">
                                        <div className="flex flex-wrap items-center divide-blue-400 sm:divide-x dark:divide-blue-400">
                                            <div className="flex items-center space-x-1 sm:pr-4 rounded-xl">
                                            
                                                <input type="text" className="w-full text-black bg-white  focus:outline-0  italic rounded-lg text-lg px-4 py-1" name="add_tag" defaultValue="Add Tags" />
                                            </div>

                                        </div>

                                    
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">                          
                                    <ul  className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">
                                        <li  className="mr-2">
                                            <a href="/"  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Yellow</a>
                                        </li>
                                        <li  className="mr-2">
                                            <a href="/"  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Red</a>
                                        </li>
                                        <li  className="mr-2">
                                            <a href="/"  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Black</a>
                                        </li>
                                        <li  className="mr-2">
                                            <a href="/"  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Bat</a>
                                        </li>
                                        <li  className="mr-2">
                                            <a href="/"  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full active" aria-current="page">Adam Handler</a>
                                        </li>
                                       
                                       
                                    </ul>
                                    </div>
                                </div>




                                <p className="text-sm font-bold text-gray-700 mt-6 ml-5">Editions</p>
                                <input type="checkbox" className="ml-10 mr-10 text-black  border-2 border-blue-500 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" name="medium" />
                                <input className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold w-14 rounded-lg text-md py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6" type="text" defaultValue="13"></input>
                                /
                                <input  className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold w-14 rounded-lg text-md py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-6" type="text" defaultValue="50"></input>
                            </div>












                        </form>
                    </div>


                    {/* <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                    </div> */}
                </div>
            </div>
    
    
    
    
    </>
  )
}
