import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const menuItems = [
        {
            menu: 'home',
            url: '/'
        },
        {
            menu: 'about',
            url: '/about'
        },
        {
            menu: 'our menu',
            url: '/menu'
        },
        {
            menu: 'contact us',
            url: '/contact'
        },
        {
            menu: 'sign in',
            url: '/signin'
        }

    ]
    const handleOnScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScroll(isScrolled);
        // console.log(scroll);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };

    }, [])
    return (
        //         <div className="sticky top-0 max-w-full">
        //             <div className=' bg-zinc-100 py-4'>
        //                 <nav className="flex justify-between items-center w-full">
        //                     <div className='md:w-1/4 w-1/2 md:mx-0 mx-auto transition-all duration-150 ease-linear delay-75'>
        //                         <h1 className={`md:text-3xl text-xl text-center block font-bold font-[poppins] text-green-800 
        //           ${scroll ? 'md:block' : 'md:hidden'}
        //           `}>The News Hub</h1>
        //                     </div>

        //                     <div className="md:w-80 w-full md:mx-10 mx-0 ">

        //                         <div className="md:w-[40%] w-full md:mx-10 mx-0 ">

        //                             <div className={`w-full flex md:flex-row flex-col md:justify-around justify-center items-center  md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent bg-sky-800 md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
        // ${open ? 'top-14' : '-top-80'}`}>
        //                                 {
        //                                     menuItems.map(item =>
        //                                         <Link key={item.menu}
        //                                             onClick={() => setOpen(!open)}
        //                                             to={item.url}
        //                                             className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
        //                                         >{item.menu}
        //                                         </Link>
        //                                     )
        //                                 }
        //                                 {/* {
        //                                     user ?
        //                                         <>
        //                                             <Link to="/dashboard"
        //                                                 className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
        //                                             >Dashboard
        //                                             </Link>
        //                                             <Link onClick={handleSignOut}
        //                                                 className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
        //                                             >Log Out
        //                                             </Link>
        //                                         </>
        //                                         :
        //                                         <Link to="/login"
        //                                             className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
        //                                         >Log In
        //                                         </Link>
        //                                 } */}
        //                             </div>

        //                         </div>

        //                     </div>
        //                     <div className='md:hidden block mx-5'>
        //                         <button onClick={() => setOpen(!open)}>
        //                             {
        //                                 !open ? <HiOutlineMenu className='w-6 h-6 text-sky-100' /> : <HiOutlineX className='w-6 h-6 text-sky-100' />
        //                             }
        //                         </button>
        //                     </div>


        //                 </nav>
        //             </div>
        //         </div>
        <div className="sticky top-0 max-w-full z-50">
            <div className={`py-3 ${scroll ? 'bg-sky-800' : 'bg-transparent'}`}>
                <nav className="flex justify-between items-center w-full">
                    <div className='md:w-1/5 w-4/5 md:mx-10 mx-5 transition-all duration-150 ease-linear delay-75 flex items-center'>
                        {/* <img src={logo} alt="" className='w-1/6' /> */}
                        <h1 className={`md:text-3xl text-xl text-center block font-bold font-[poppins] text-white 
                            ${scroll ? 'md:block' : 'md:hidden'}
                  `}>FoodKo</h1>
                    </div>

                    <div className="md:w-[40%] w-full md:mx-10 mx-0 ">

                        <div
                            className={`w-full flex md:flex-row flex-col md:justify-around justify-center items-center  md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent bg-sky-800 md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
                            ${open ? 'top-14' : '-top-80'}
    `}>
                            {
                                menuItems.map(item =>
                                    <Link key={item.menu}
                                        onClick={() => setOpen(!open)}
                                        to={item.url}
                                        className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                                    >{item.menu}
                                    </Link>
                                )
                            }
                            {/* {
                                user ?
                                    <>
                                        <Link to="/dashboard"
                                            className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                                        >Dashboard
                                        </Link>
                                        <Link onClick={handleSignOut}
                                            className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                                        >Log Out
                                        </Link>
                                    </>
                                    :
                                    <Link to="/login"
                                        className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                                    >Log In
                                    </Link>
                            } */}
                        </div>

                    </div>
                    <div className='md:hidden block mx-5'>
                        <button onClick={() => setOpen(!open)}>
                            {
                                !open ? <HiOutlineMenu className='w-6 h-6 text-sky-100' /> : <HiOutlineX className='w-6 h-6 text-sky-100' />
                            }
                        </button>
                    </div>


                </nav>
            </div>
        </div>

    )
}

export default NavBar
