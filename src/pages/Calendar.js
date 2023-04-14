import * as React from 'react';
import { IoFilterOutline } from "react-icons/io5";
// import { render } from "react-dom";
import Demo from "../demo-data/demo.js";




export default function Calendar() {
    // render(<Demo/> , document.getElementById("root"));

    return (
        <>

        

            <div className="min-[480px]:pt-10 sm:ml-48 min-[480px]:top-10 bg-gray-200 h-full" >
                <div className="min-[480px]:grid grid-cols-6">
                    <div className='min-[480px]:flex col-span-5 ...'>
                        <h2 className="dark:text-black text-3xl  mb-4 px-6" >Calendar</h2>
                    </div>

                </div>
                <hr className="ml-5 h-px my-3 bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>
                <div className="filters mb-3">

                    <div className='min-[480px]:flex'>
                        <span className="text-sm font-semibold mr-3 ml-6 flex items-center"><IoFilterOutline className='mr-3' /> Filter:</span>
                        <select className="text-sm font-semibold bg-transparent mr-3 border-none" >
                            <option>Relation</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-3 border-none" >
                            <option>Group</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-sm font-semibold bg-transparent mr-3 border-none" >
                            <option>Location</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>

                    </div>
                </div>
                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <div className="min-[480px]:m-20">
                        <div className="min-[480px]:grid grid-cols-12 ">
                            <div className="col-span-2">
                                <p className='font-semibold mt-16'>My Calendars :</p>
                                <p className='font-bold mt-8 text-sm'><input type="checkbox" className='mr-2 border-2 border-green-400 focus:border-green-300' />My Calendar</p>
                                <p className='font-bold mt-2 text-sm'><input type="checkbox" className='mr-2 border-2 border-purple-500 focus:border-green-300' />Shows</p>
                                <p className='font-bold mt-2 text-sm'><input type="checkbox" className='mr-2 border-2 border-teal-300 focus:border-green-300' />Meetings</p>
                                <p className='font-bold mt-2 text-sm '><input type="checkbox" className='mr-2 border-2 border-red-500 focus:border-green-300' />Events</p>
                            </div>
                            <div className="col-span-10"><Demo /></div>

                        </div>




                    </div>


                </div>
            </div>


        </>

    )

}
