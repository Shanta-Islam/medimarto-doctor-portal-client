import { Navbar } from 'flowbite-react';
import logo from '../../../assets/images/logo.png';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = ({open, setOpen}) => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const toggle = ()=>{
        setOpen(!open);
        console.log(open);
    }
    return (
        <Navbar fluid className='px-6 md:px-16 mt-0 fixed w-full z-50 top-0 shadow-md'>
            <div className="flex">
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggle}>
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>
            <Navbar.Brand href="/">
                <img
                    alt="medimarto"
                    className="mr-3 h-6 sm:h-9"
                    src={logo}
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    Medimarto
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#40d0c6] font-bold' : 'hover:text-[#025d57]'} to="/home">
                        Home
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#40d0c6] font-bold' : 'hover:text-[#025d57]'} to="/appointment">
                        Appointment
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#40d0c6] font-bold' : 'hover:text-[#025d57]'} to="/about">
                        About
                    </NavLink>
                </Navbar.Link>

                {
                    user?.uid ?
                        <>
                            <Navbar.Link>
                                <NavLink className={({ isActive }) => isActive ? 'text-[#40d0c6] font-bold' : 'hover:text-[#025d57]'} to="/dashboard">
                                    Dashboard
                                </NavLink>
                            </Navbar.Link>
                            <Navbar.Link>
                                <NavLink className={({ isActive }) => isActive ? 'text-[#40d0c6] font-bold' : 'hover:text-[#025d57]'} onClick={handleLogout}>
                                    Sign out
                                </NavLink>
                            </Navbar.Link>
                        </>
                        :
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'text-[#40d0c6] font-bold' : 'hover:text-[#025d57]'} to="/login">
                                Login
                            </NavLink>
                        </Navbar.Link>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;