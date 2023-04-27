import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../utils'
import { useForm } from "react-hook-form";
import MyDropzone from '../components/DropZone.js'
import TagInput from '../components/TagInput';
export default function AddArtwork() {
    const [files, setFiles] = React.useState([]);
    const [tags, setTags] = React.useState([]);
    const [success, setSuccess] = React.useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        data.tags = tags;
        data.image = files;

        async function getData() {

            const result = await AxiosInstance(
                {
                    'url': '/add-artwork',
                    'method': 'post',
                    'data': data
                }
            )
            if (result.status === 200) {
                console.log(result.status)
                setSuccess('Data added succesfully')
      
                alert('Data added succesfully')
                setTimeout(() => {
                    navigate("/artwork");
                  }, 3000);

            }
        }
        getData()
    };

    const handleImages = {
        files,
        setFiles,
        tags,
        setTags
    }
    const handleTags = {
        tags,
        setTags,
    }
    return (

        <>

            <div className="max-[612px]:pt-8 pt-20 sm:ml-48 min-[612px]:top-20 bg-gray-200 h-full " >
                {/* {success} */}
                <h2 className="dark:text-black text-3xl  mb-4 px-6" >Add Artwork</h2>
                <div className="p-4 border-1 border-blue-400 border-dashed mx-6 rounded-lg dark:border-blue-700 h-full top-20 bg-white">
                    <h2 className="text-sm font-bold text-black mb-4">Upload Image</h2>
                    <div className="w-full">

                        <form onSubmit={handleSubmit(onSubmit)} id="artWorkForm">

                            <MyDropzone {...handleImages} multiple={true} />
                            <div className='min-[480px]:grid grid-cols-2 gap-12'>
                                <div className=" ">

                                    <div className="w-full mt-12   bg-white dark:bg-white dark:border-blue-600">

                                        <input  {...register("Title", { required: true })} type="text" className="flex items-center justify-between border-2 italic border-blue-200 text-lg rounded-b-none divide-blue-400 sm:divide-x dark:divide-blue-400 w-full text-black bg-white focus:outline-0  rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" defaultValue="" placeholder='Add Title' />

                                        <div className="px-4 py-2 border-l-2 border-r-2 border-b-2 border-blue-200 bg-white rounded-b-lg dark:bg-gray-800">
                                            <textarea {...register("Description", {
                                                required: true,
                                            })}

                                                id="editor" rows="4" className="border-none block italic w-full px-0 focus:outline-0 text-md text-gray-800 bg-white focus:ring-0 dark:text-white dark:placeholder-gray-700" placeholder="Add Description" ></textarea>

                                        </div>
                                        {errors.Title && <span className='text-red-500'>The Title field is required </span>}
                                        {errors.Description && <span className='text-red-500'> The Description field is required</span>}

                                    </div>

                                    <h2 className="mb-2 text-sm font-bold text-gray-700 dark:text-white pt-5 ml-5">Type</h2>

                                    <select defaultValue="" {...register("Type", {
                                        required: true
                                    })}
                                        className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 customSelect" >
                                        <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  >Painting</option>
                                    </select>
                                    {errors.Type && <span className='text-red-500'>This field is required</span>}
                                    <input {...register("acrylicAndOil", {
                                        required: true
                                    })}
                                        type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" placeholder="Acrylic and Oil on Canvas" />
                                    {errors.acrylicAndOil && <span className='text-red-500'>This field is required</span>}

                                    <input {...register("natureExpression", {
                                        required: true
                                    })}
                                        type="text" className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" placeholder="Nature, Expression" />
                                    {errors.natureExpression && <span className='text-red-500'>This filed is required</span>}

                                    <input type="text" {...register("Inventory", {
                                        required: true
                                    })} className="w-full text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600" placeholder="Your Inventory " />
                                    {errors.Inventory && <span className='text-red-500'>This field is required</span>}

                                    <div className="min-[480px]:grid grid-cols-2 gap-12 mt-8">
                                        <div className="">
                                            <p className="text-sm font-bold text-gray-700 ml-5">Creation Date</p>
                                            <div className="inline-flex mr-4 mt-4 mb-4">
                                                <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-500 py-2 px-4  rounded-l-lg w-12" placeholder='M' {...register("creationMonth")} />

                                                <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-500 py-2 px-4 w-12" placeholder='D' {...register("creationDay")} />

                                                <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-500  py-2 px-4  rounded-r-lg w-14" placeholder='YY' {...register("creationYear")} />

                                            </div>
                                            <p className="text-sm font-bold text-gray-700 ml-5">Signature</p>
                                            <input type="checkbox" {...register("signature")} className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold  text-md   dark:bg-blue-600" />
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-bold text-gray-700 ml-4 min-[480px]:mt-2">Visibility</p>

                                            <select defaultValue="" {...register("visiblity", {
                                                required: true
                                            })} className="w-full text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <option value="private">Private</option>
                                                <option value="public">Public</option>
                                            </select>

                                            {errors.Private && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                    </div>


                                </div>
                                <div className="">

                                    <p className="text-sm font-bold text-gray-700 ml-5 mt-8">Dimensions</p>

                                    <div className="inline-flex mr-4">
                                        <input type="text" className="bg-white border-l-2 border-t-2 border-b-2 hover:bg-white border-blue-200  text-gray-800 font-bold py-2 px-4 rounded-l-lg w-14" placeholder='69' {...register("dimensionHeight")} />

                                        <input type="text" className="bg-white border-2 hover:bg-white border-blue-200 text-gray-800 font-bold py-2 px-4 w-14" placeholder='90' {...register("dimensionWidth")} />

                                        <input type="text" className="bg-white border-r-2 border-t-2 border-b-2 border-blue-200 hover:bg-white text-gray-800 font-bold py-2 px-4  rounded-r-lg w-14" placeholder='D' />

                                    </div>
                                    {/* <select defaultValue="" {...register("dimensionType", {
                                                    required: true
                                                })} className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <option value='inches'>Inches</option>
                                        <option value='square'>Square</option>
                                        <option value='inches'>Feets</option>
                                    </select> */}

                                    <select defaultValue="" {...register("dimensionType")} className="text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <option >Inches</option>
                                        <option >Square</option>
                                        <option >Feets</option>
                                    </select>
                                    {errors.dimensionType && <span className='text-red-500'>This field is required</span>}
                                    <p className="text-sm font-bold text-blue-500 ml-2 mt-8 mb-6">+ Add Framed Size</p>
                                    <p className="text-sm font-bold text-gray-700 mt-6 ml-5">Status</p>
                                    <select defaultValue="" {...register("availability")} className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md pl-2 py-2.5 pr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <option value="Available">Available</option>
                                        <option value="Not available">Square</option>

                                    </select>

                                    <input type="number" {...register("salery")} className="max-[768px]:ml-0 max-[1024px]:ml-1 ml-6 mr-6 text-black  border-2 border-blue-200 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 w-36" placeholder="8,500.00" />
                                    <select defaultValue="" {...register("IncomeType", {
                                        required: true
                                    })} className=" text-black  border-2 border-blue-200 mt-3  pr-5 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <option>USD</option>
                                        <option>CAD</option>
                                        <option>INR</option>
                                    </select>
                                    {errors.IncomeType && <span className='text-red-500'>This field is required</span>}


                                    <div className="mt-6 w-full mb-4 border-2 border-blue-200  rounded-xl bg-white dark:bg-white dark:border-blue-600">
                                        <TagInput {...handleTags} className="flex items-center justify-between border-b-2 border-t-none italic border-blue-200 text-lg rounded-b-none divide-blue-400 sm:divide-x dark:divide-blue-400 w-full text-black bg-white focus:outline-0  rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 w-100 mt-2 inline-block px-4 py-2 text-white bg-blue-600" />

                                        <div className="px-4 py-2 bg-white rounded-xl dark:bg-gray-800">

                                            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-14">


                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-gray-700 mt-6 ml-5 ">Editions</p>
                                    <input type="checkbox" {...register("editions")} className="max-[768px]:mb-6 min-[480px]:max-[992px]:mt-0  ml-10 mr-10 text-blue-500  border-2 border-blue-500 mt-3 bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold text-md   dark:bg-blue-600" />
                                    <input {...register("editionFrom")} className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold w-14 rounded-lg text-md py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6 min-[480px]:mr-1 max-[992px]:mr-1 " type="text" placeholder="13"></input>
                                    /
                                    <input {...register("editionTo")} className=" text-black  border-2 border-blue-200 mt-3 bg-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-bold w-14 rounded-lg text-md py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-6 min-[480px]:ml-1 max-[992px]:ml-1" type="text" placeholder="50"></input>
                                </div>
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
