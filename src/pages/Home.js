import React from 'react'

export default function Home() {
  return (
    <>
      <div className=''>
            <nav className="min-[320px]:invisible min-[620px]:visible bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className=" flex flex-wrap items-center justify-between w-4/5 mg-auto">            
                    <h2 className="text-2xl font-bold dark:text-black text-blue-600">Art Index</h2>
                    <p className='flex'>
                        <p className='text-sm font-bold py-2 mr-10 cursor-pointer'>Log In</p>
                        <p className='text-sm font-bold py-2 px-8 bg-emerald-400 rounded-full cursor-pointer'>/Join</p>
                    </p>
                </div>  
            </nav>
            <div className='w-full bg-blue-700 mt-20'>
                <div className='w-4/5 grid grid-cols-2 gap-4 mg-auto'>
                    <div className='pb-20'>
                        <h1 className='font-bold text-white mt-20 text-6xl'>Managing Art,</h1>
                        <h1 className='font-bold text-white text-6xl'>Made Easy</h1>
                        <p className='text-white mt-10'>Simplifying the way we look at art, our CRM</p>
                        <p className='text-white '>platform serves all ranges of artists,galleries,</p>
                        <p className='text-white '>and collectors.</p>
                        <p className='flex mt-10'>
                            
                            <p className='text-sm cursor-pointer text-black border-2 border-emerald-400 font-bold py-2 px-8 bg-emerald-400 rounded-full  mr-10'>/Join</p>
                            <p className='text-sm cursor-pointer text-white font-bold py-2 px-8   border-2 border-emerald-400 rounded-full'>Log In</p>
                        </p>
                    </div>
                    <div className='pb-20'>

                    </div>

                </div>

            </div>
            <div className='w-full bg-stone-200'>
                <div className='w-6/12 pt-20 pb-20 mg-auto'>
                
                        <div className='mb-20 text-center'>
                            <h1 className='font-bold text-gray-600 mt-20 text-4xl'>/ Features</h1>
                            <p className='text-gray-500 mt-4 text-lg '>Simplifying the way we look at art, our CRM platform serves </p>
                            <p className='text-gray-500 text-lg '>all ranges of artists,galleries,and collectors.</p>
                        </div>
                        <div className='mb-20 text-center'>
                            <h1 className='font-bold text-gray-600 mt-20 text-4xl'>/ Features</h1>
                            <p className='text-gray-500 mt-4 text-lg '>Simplifying the way we look at art, our CRM platform serves </p>
                            <p className='text-gray-500 text-lg '>all ranges of artists,galleries,and collectors.</p>
                        </div>
                        <div className='mb-20 text-center'>
                            <h1 className='font-bold text-gray-600 mt-20 text-4xl'>/ Features</h1>
                            <p className='text-gray-500 mt-4 text-lg '>Simplifying the way we look at art, our CRM platform serves </p>
                            <p className='text-gray-500 text-lg '>all ranges of artists,galleries,and collectors.</p>
                        </div>
                    
                    

                
                </div>
            </div>
            <div className='w-full'>
                <div className='w-4/5 grid grid-cols-2 gap-4 pb-20 pt-20 mg-auto'>
                    <div className=''>
                        <h1 className='font-bold text-gray-600  text-3xl ml-14 pb-10'>/ Your Personal Concierge</h1>
                        <div className='grid grid-cols-3 '>
                            <div className=''>
                                <img src='/security.jpeg'></img>
                                <img src='/security.jpeg'></img>
                                <img src='/security.jpeg'></img>
                            </div>
                            <div className=''>
                                <img src='/security.jpeg'></img>
                                <img src='/security.jpeg'></img>
                                <img src='/security.jpeg'></img>
                            </div>
                            <div className=''>
                                <img src='/security.jpeg'></img>
                                <img src='/security.jpeg'></img>
                                <img src='/security.jpeg'></img>
                            </div>
                        </div>
                    </div>
                    <div className='mt-28 '>                   
                        <img className='h-96' src='/inverteryArt.jpeg'></img>
                    </div>

                </div>
            </div>
            <div className='w-full bg-blue-700'>
                <div className='w-4/5 pb-20 pt-20 mg-auto'>
                    <p className='text-white font-bold text-lg'>Perfect For</p>
                    <p className='text-white font-bold text-3xl'>/ Artists</p>
                    <div className='ml-12 grid grid-cols-3 gap-4 py-10'>
                    
                        <div className=''>
                            <div className='w-3/5'>
                                <p className='text-gray-600 font-bold bg-emerald-400 text-center py-2'>/ Basic</p>
                                <div className='bg-white text-center pb-10'>
                                    <h1 className='text-gray-600 text-3xl font-bold py-4'>$XX <span className='text-gray-600 font-normal'>/mo</span></h1>
                                    <p className='text-gray-600 font-thin text-center  text-sm'>10 users included</p>
                                    <p className='text-gray-600 font-thin text-center  text-sm'>2 GB of storage</p>
                                    <p className='text-gray-600 font-thin text-center  text-sm'>Email support</p>
                                    <p className='text-gray-600 font-thin text-center  text-sm pb-10'>Help Center Access</p>
                                    <p className='text-sm cursor-pointer text-gray-600 py-2 px-2 border-2 border-emerald-400 rounded-full ml-4 mr-4'>Sign Up For Free</p>
                                </div>
                            </div>
                        
                        </div>
                        <div className=''>                   
                        
                        </div>
                        <div className=''>                   
                        
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full bg-stone-700'>
                <div className='w-3/5 text-center mg-auto' >
                    <div className='py-20'>
                        <h1 className='font-bold text-white text-3xl pb-10'>Art Index</h1>
                        <p className='text-white pb-12'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        <p className='flex text-center'>
                            <a href='/' className='text-white pb-12'>Contact | </a> 
                            <a href='/' className='text-white pb-12 ml-1'>  Privacy Policy</a>
                        </p>
                    </div>
                    

                </div>
            </div>
                
               
                    
                    

                
          
        </div>
      
    </>
  )
}
