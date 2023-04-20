import * as React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { useForm, useFieldArray , Controller } from "react-hook-form";

export default function NewContact() {

      const { register, control, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
      });
      const { fields, append, remove } = useFieldArray({
        control,
        name: "emails"
      });
      const { fields:fieldsForPhone, append:appendForPhone, remove:removeForPhone } = useFieldArray({
        control,
        name: "phoneNumber"
      });
      const { fields:fieldsForWebsite, append:appendForWebsite, remove:removeForWebsite } = useFieldArray({
        control,
        name: "websites"
      });
      const { fields:fieldsForAddress, append:appendForAddress, remove:removeForAddress } = useFieldArray({
        control,
        name: "address"
      });

    
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


                                <form onSubmit={handleSubmit(data => console.log(data))}>
         
                                    <div className=''>
                                        <div className="ml-12  inline-flex  mt-4 mb-4 w-full">
                                            <input type="text" className=" bg-white leading-5 border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-600 py-2.5 px-8  pr-12 rounded-l-lg" placeholder='First Name' name="username"
                                                id="validationCustom01" {...register("FirstName", { required: true })} />
                                            <input type="text"  {...register("MiddleName")} className="bg-white leading-5 border-2 hover:bg-white border-blue-200 text-gray-600 py-2.5 px-7 " placeholder='Middle Name' />
                                            <input type="text" {...register("LastName", { required: true })} className="bg-white leading-5 border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-600  py-2.5 px-8  pr-12 rounded-r-lg" placeholder='Last Name' />
                                        </div>
                                        {errors.FirstName && <span className='text-red-500 ml-12'>First Name is required</span>}
                                        {errors.LastName && <span className='text-red-500 ml-12'>Last Name is required</span>}
                                        <div className="min-[480px]:grid grid-cols-6 gap-10 mt-4">
                                            <div className='col-span-3'>
                                                <input type="text" {...register("CrutorRequired", { required: true })} className="ml-12  w-10/12 bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Curator' />

                                                {errors.CrutorRequired && <span className='text-red-500 ml-12'>Curator is required</span>}

                                                <div className='flex mt-4 justify-between items-center'>
                                                    <span className='mt-6 mr-4'><IoMdMail size={30} color='gray' /></span>
                                                    <div>
                                                    <select className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        <option >Personal</option>
                                                        <option >Work</option>
                                                    </select>
                                                    </div>
                                                    <input type="text" {...register("Email", {
                                                        required: {
                                                            value: true,
                                                            message: "Email is required"
                                                        },
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "invalid email address"
                                                        }
                                                    })} className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500  rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2" placeholder="E-mail" />
                                                    <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>

                                                </div>
                                                {errors.Email && <span className='text-red-500 ml-12'>{errors.Email?.message}</span>}
                                                <div className='flex mt-4 justify-between items-center'>
                                                    <span className='mt-6 mr-4'><IoMdMail size={30} color='gray' /></span>
                                                    <select className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        <option >Work</option>
                                                        <option >Personal</option>
                                                    </select>
                                                    <input type="text" className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60  ml-2" {...register("EmailSecond")} placeholder="E-mail" />
                                                    <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>

                                                </div>
                                                <ul>
                                                    {fields.map((item, index) => (
                                                        <li key={item.id}>
                                                            <div className='flex mt-4 justify-between items-center'>
                                                            <span className='mt-6 mr-4'><IoMdMail size={30} color='gray' /></span>
                                                            <select name={`emails.${index}.type`}  className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" control={control}>
                                                            <option value="work">Work</option>
                                                            <option value="personal">Personal</option>
                                                            </select>
                                                            <Controller
                                                            render={({ field }) => <input className="text-black  h-11 border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2" {...field}  placeholder='E-mail'/>}
                                                            name={`emails.${index}.email`} 
                                                            control={control}
                                                            />
                                                            <button type="button" onClick={() => remove(index)}><CiCircleRemove size={20} color='DodgerBlue' /></button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            
                                                <button className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2" type="button"
                                                    onClick={() => append({ email: "", type: "work" })}>+ Add Email</button>
                                                
                                                <div className='flex mt-2 justify-between items-center'>
                                                    <span className='mt-6 mr-4'><IoIosCall size={30} color='gray' /></span>
                                                    <select className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        <option >Work</option>
                                                        <option >Personal</option>
                                                        </select>
                                                    <input type="number"  {...register("PhoneNumber", { required: true, maxLength: 10 })} className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500  rounded-lg text-md px-4 dark:bg-blue-600 w-60  ml-2" placeholder="Phone Number" />
                                                    <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>

                                                </div>
                                                {errors.PhoneNumber && <span className='text-red-500 ml-12'> {errors.PhoneNumber?.type === 'required' ? 'Phone Number is required' : 'Phone number must not be more than 10 digits'}</span>}
                                                {/* <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Phone Number</p> */}


                                                 <ul>
                                                    {fieldsForPhone?.map((item, index) => (
                                                        <li key={item.id}>
                                                            <div className='flex mt-4 justify-between items-center'>
                                                            <span className='mt-6 mr-4'><IoIosCall size={30} color='gray' /></span>
                                                            <select className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <option >Work</option>
                                                                <option >Personal</option>
                                                            </select>
                                                            <Controller
                                                            render={({ field }) => <input className="text-black  h-11 border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2" {...field}  placeholder='Phone Number'/>}
                                                            name={`phoneNumber.${index}.phone`} 
                                                            control={control}
                                                            />
                                                            {/* <Controller
                                                            render={({ field1 }) => <input className="text-black h-11 border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2" {...field1}  placeholder='Phone Number'/>}
                                                            name={`test1.${index1}.phone`} 
                                                            control={control}
                                                            /> */}
                                                            <button type="button" onClick={() => removeForPhone(index)}><CiCircleRemove size={20} color='DodgerBlue' /></button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            
                                                <button className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2" type="button"
                                                    onClick={() => appendForPhone({ phone:"", typeoOF: "work" })}>+ Add Phone Number</button> 


                                                <div className='flex mt-2 justify-between items-center'>
                                                    <span className='mt-6 mr-4'><IoIosLink size={30} color='gray' /></span>
                                                    <select className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        <option >Work</option>
                                                        <option >Personal</option>
                                                        </select>
                                                    <input type="text" {...register("Website", { required: true })} className="w-64 text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500  rounded-lg text-md px-4 dark:bg-blue-600 ml-2" placeholder="Website" />
                                                    <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>

                                                </div>
                                                {errors.Website && <span className='text-red-500 ml-12'>Website is required</span>}
                                                {/* <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2"> + Add Website</p> */}
                                                <ul>
                                                    {fieldsForWebsite?.map((item, index) => (
                                                        <li key={item.id}>
                                                            <div className='flex mt-4 justify-between items-center'>
                                                            <span className='mt-6 mr-4'><IoIosLink size={30} color='gray' /></span>
                                                            <select className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <option >Work</option>
                                                                <option >Personal</option>
                                                            </select>
                                                            <Controller
                                                            render={({ field }) => <input className="text-black  h-11 border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2" {...field}  placeholder='Website'/>}
                                                            name={`websites.${index}.website`} 
                                                            control={control}
                                                            />
                                                            {/* <Controller
                                                            render={({ field2 }) => <input className="text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-md px-4 dark:bg-blue-600 w-60 ml-2 h-11" {...field2}  placeholder='Website'/>}
                                                            name={`test2.${index}.webistes`} 
                                                            control={control}
                                                            /> */}
                                                            <button type="button" onClick={() => removeForWebsite(index)}><CiCircleRemove size={20} color='DodgerBlue' /></button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            
                                                <button className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2" type="button"
                                                    onClick={() => appendForWebsite({ website:"", typeoOF: "work" })}>+ Add Website</button> 

                                                <div className="ml-12 min-[480px]:grid grid-cols-2 gap-2 mt-8">
                                                    <div className="">
                                                        <p className="text-sm font-bold text-gray-700 ml-5">Birthday</p>
                                                        <div className="inline-flex mr-4 mt-4 mb-4">
                                                            <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-14" {...register("BirthDateMonth")} placeholder='M' />
                                                            <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-14" {...register("BirthDateDay")}  placeholder='D' />
                                                            <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" {...register("BirthDateYear")} placeholder='YY' />
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <p className="text-sm font-bold text-gray-700 ml-5">Death Date</p>
                                                        <div className="inline-flex mr-4 mt-4 mb-4">
                                                            <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-14" {...register("DeathDateMonth")} placeholder='M' />
                                                            <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-14" {...register("DeathDateDay")} placeholder='D' />
                                                            <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" {...register("DeathDateYear")} placeholder='YY' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-3'>
                                                <input type="text"  {...register("HauserRequired", { required: true })} className="ml-12 w-10/12  bg-white leading-5 border-2  hover:bg-white border-blue-200  text-gray-600 py-2.5 px-4  rounded-lg" placeholder='Hauser & Wirth' />
                                                {errors.HauserRequired && <span className='text-red-500 ml-12'>Hauser is required</span>}
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
                                                        <input type="text"  {...register("StreetAddress1", { required: true })} className="w-full text-black bg-white border-b-2 border-l-2  border-r-2  border-t-2 border-blue-200 focus:outline-0  italic rounded-t-lg text-md px-4 py-2 " placeholder="Street address line 1" />
                                                        <input type="text"  {...register("StreetAddress2")} className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200  focus:outline-0  italic  text-md px-4 py-2" placeholder="Street address line 2" />
                                                        <input type="text"  {...register("NewYork")} className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200 focus:outline-0  italic  text-md px-4 py-2" placeholder="New York" />
                                                        <input type="text"  {...register("Ny")} className="bg-white border-l-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-r-none w-1/2" placeholder="NY" />
                                                        <input type="text"  {...register("Zip", { required: true })} className="bg-white border-r-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-l-none w-1/2" placeholder="10011" />
                                                    </div>
                                                    <span className='mt-3 ml-1'><CiCircleRemove size={20} color='DodgerBlue' /></span>
                                                </div>
                                                {errors.StreetAddress1 && <span className='text-red-500 ml-12'>Street Address is required</span>}
                                                {errors.Zip && <span className='text-red-500 ml-12'>Zip is required</span>}
                                                {/* <p className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2">+ Add Address</p> */}
                                                <ul>
                                                    {fieldsForAddress.map((item, index) => (
                                                        <li key={item.id}>
                                                            <div className='flex mt-4 justify-between items-center'>
                                                            <span className='mt-6 mr-4'><IoIosHome size={30} color='gray' /></span>
                                                            <select name={`emails.${index}.type`}  className="mt-4 text-black  border-2 border-blue-200  bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" control={control}>
                                                            <option value="work">Work</option>
                                                            <option value="personal">Personal</option>
                                                            </select>
                                                            <div className="ml-2 mt-4">
                                                                <Controller
                                                                render={({ field }) => <input className="w-full text-black bg-white border-b-2 border-l-2  border-r-2  border-t-2 border-blue-200 focus:outline-0  italic rounded-t-lg text-md px-4 py-2 " placeholder="Street address line 1"  {...field}  />}
                                                                name={`addresses.${index}.streetaddress1`} 
                                                                control={control}
                                                                />
                                                                <Controller
                                                                render={({ field }) => <input  className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200  focus:outline-0  italic  text-md px-4 py-2" placeholder="Street address line 2"   {...field}  />}
                                                                name={`addresses.${index}.streetaddress2`} 
                                                                control={control}
                                                                />
                                                                <Controller
                                                                render={({ field }) => <input className="w-full text-black bg-white border-t-0 border-b-2  border-l-2  border-r-2 border-blue-200 focus:outline-0  italic  text-md px-4 py-2" placeholder="New York"  {...field}  />}
                                                                name={`addresses.${index}.newyork`} 
                                                                control={control}
                                                                />
                                                                <Controller
                                                                render={({ field }) => <input  className="bg-white border-l-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-r-none w-1/2" placeholder="NY"  {...field}  />}
                                                                name={`addresses.${index}.ny`} 
                                                                control={control}
                                                                /> 
                                                                <Controller
                                                                render={({ field }) => <input  className="bg-white border-r-2 border-t-0 border-b-2 hover:bg-white border-blue-200 italic text-gray-500 py-2 px-4 border-t-none rounded-b-lg  rounded-l-none w-1/2" placeholder="10011"  {...field}  />}
                                                                name={`addresses.${index}.zip`} 
                                                                control={control}
                                                                />
                                                            </div>
                                                            <button type="button" onClick={() => removeForAddress(index)}><CiCircleRemove size={20} color='DodgerBlue' /></button>
                                                            </div>
                                                        </li>
                                                    ))} 
                                                </ul>
                                            
                                                <button className="text-sm font-bold text-blue-500 ml-16 mt-4 mb-2" type="button"
                                                    onClick={() => appendForAddress({ email: "", type: "work" })}>+ Add Address</button>
                                               
                                               
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
                                                                <a href="/" className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full  " aria-current="page">Buyer</a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="/" className="inline-block px-4 py-2 text-black bg-amber-300 rounded-full  " aria-current="page">LGBTQ Friendly</a>
                                                            </li>
                                                            <li className="">
                                                                <a href="/" className="inline-block px-4 py-2 text-white bg-red-400 rounded-full  " aria-current="page">Modren</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                
                                                <button type="submit" className="ml-12 flex items-center gap-1 p-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800">
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
