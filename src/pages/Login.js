import { Button, Modal } from 'flowbite-react';
import * as React from 'react'
import { IoFilterOutline } from "react-icons/io5";
// import GallerySlider from '../components/GallerySlider';

export default function Login() {
    const [showModal, setShowModal] = React.useState(false);
    const handleOnClick = () => {
        setShowModal(true)
    }
    const handleOnClose = () => {
        setShowModal(false)
    }                                                                                                                                   

    return (
        <>
            <Button onClick={handleOnClick}>
                Toggle modal
            </Button>
            <Modal
                show={showModal}
                size="4xl"
                onClose={handleOnClose}
            >
                {/* <Modal.Header>
                    Terms of Service
                </Modal.Header> */}
                <Modal.Body>
                    <div className="space-y-6">
                    <div className="filters">

                    <div className='min-[480px]:flex '>
                    <input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                        <span className="text-xs font-semibold mr-4 flex items-center"><IoFilterOutline className='mr-2' />  Filter:</span>
                        <select className="text-xs font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Relation</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-xs font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Group</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                        <select className="text-xs font-semibold bg-transparent mr-2 border-none max-[480px]:ml-4" >
                            <option>Location</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>

                        <span className='ml-64'
                        color="gray"
                        onClick={handleOnClose}
                        >
                            X
                        </span>
                       
                    </div>
                    </div>
                    <hr className="my-0 bg-gray-700 border border-gray-300 dark:bg-gray-700"></hr>                                
                    <div className="relative overflow-x-auto">
                    
                            <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                             
                                <tbody>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td className="pl-0 pr-0 w-10 py-4 "><input type="checkbox" className="ml-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-sm" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">
                                            <img className="h-10  rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs font-bold   text-black">Rose Wells</p>
                                        </td>
                                        <td className="text-xs px-6 py-4">
                                            Rose.Wells@AOl.com
                                        </td>
                                        <td className="text-xs px-6 py-4">
                                            (863)608-7952
                                        </td>
                                        <td className="text-xs px-6 py-4">
                                            Curator
                                        </td>
                                        <td className="text-xs px-6 py-4">
                                            Hauser & Wirth
                                        </td>
                                      
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">

                                            <img className="h-10 rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs font-bold   text-black">Dexter Jamer</p>
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
                                      
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">

                                            <img className="h-10 rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs font-bold   text-black">Harley Harris</p>
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
                                      
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">

                                            <img className="h-10 rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs font-bold   text-black">Charlie Lewis</p>
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
                                      
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 bg-white font-bold  text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">

                                            <img className="h-10 rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs font-bold   text-black">Liam Reynolds</p>
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
                                      
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 outline-none text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 focus:bg-blue-500 focus:text-blue-500 bg-white text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">

                                            <img className="h-10 rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs  font-bold text-black">Trenton Hines</p>
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
                                      
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-gray-700">
                                        <td  className="pl-0 pr-0 w-10 py-4"><input type="checkbox" className="ml-10 mr-10 outline-none text-blue-500 max-[768px]:ml-6 max-[768px]:mb-2 border-2 border-blue-500 mt-3 focus:bg-blue-500 focus:text-blue-500 bg-white text-md" name="medium" />
                                        </td>
                                        <td className="pr-6 py-4 flex items-center">

                                            <img className="h-10 rounded-full w-10" src="/rose.jpg" alt="Girl in a jacket" />
                                            <p className="ml-6 text-xs  font-bold text-black">Trenton Hines</p>
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
                                      
                                    </tr>
                                
                                   
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                  
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button
                        onClick={handleOnClick}
                    >
                        I accept
                    </Button>
                    <Button
                        color="gray"
                        onClick={handleOnClose}
                    >
                        Decline
                    </Button>
                </Modal.Footer> */}
            </Modal>

            <form>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
           <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
               <div className="flex items-center space-x-1 sm:pr-4">
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Attach file</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Embed map</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Upload image</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Format code</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Add emoji</span>
                   </button>
               </div>
               <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Add list</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>       
                       <span className="sr-only">Settings</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Timeline</span>
                   </button>
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                       <span className="sr-only">Download</span>
                   </button>
               </div>
           </div>
           <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
               <span className="sr-only">Full screen</span>
           </button>
           <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
               Show full screen
               <div className="tooltip-arrow" data-popper-arrow></div>
           </div>
       </div>
       <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
           <label htmlFor="editor" className="sr-only">Publish post</label>
           <textarea id="editor" rows="8" className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
       </div>
   </div>
   <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
</form>

                                      

         

   

        </>
    )
}
