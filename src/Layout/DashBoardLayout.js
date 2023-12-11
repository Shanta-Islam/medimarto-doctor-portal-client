import React, { useContext, useState } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Contexts/AuthProvider';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(true);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Header open={open} setOpen={setOpen}></Header>
            <div>
                {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button> */}
                <aside id="default-sidebar" className={`fixed top-12 left-0 z-40 ${open ? '-translate-x-full sm:translate-x-0 w-64' : 'translate-x-full sm:translate-x-0 -left-40'} h-screen transition-transform`} aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 relative">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to='/dashboard'><a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="ml-3">My Appointments</span>
                                </a></Link>
                            </li>
                            {
                                isAdmin && <>
                                    <li>
                                        <Link to='/dashboard/allusers'><a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <span className="ml-3">All Users</span>
                                        </a></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/adddoctor'><a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <span className="ml-3">Add a Doctor</span>
                                        </a></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/managedoctors'><a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <span className="ml-3">Manage Doctors</span>
                                        </a></Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </aside>
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                    </div>
                </div>
                <div className="p-4 sm:ml-64 mt-10">
                    <div className="p-4 rounded-lg dark:border-gray-700">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;