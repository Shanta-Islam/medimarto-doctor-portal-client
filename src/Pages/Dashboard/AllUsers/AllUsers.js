import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://medimarto-doctor-portal-server.vercel.app/users');
            const data = await res.json()
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://medimarto-doctor-portal-server.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success('Make admin successful');
                refetch();
            }
        })
    }

    
    return (
        <div>
            <h3 className='text-3xl text-center mb-5'>All Users</h3>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Admin
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user, i)=>  <tr key={user._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i+1}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.name}
                        </th>
                        <td class="px-6 py-4">
                            {user.email}
                        </td>
                        <td>
                            {
                                user?.role !== 'admin' && <button className='bg-primary  text-white font-bold py-1 px-4 rounded' onClick={()=> handleMakeAdmin(user._id)}>Make Admin</button>
                            }
                        </td>
                        <td>
                            <button className='bg-red-500  text-white font-bold py-1 px-4 rounded'>Delete</button>
                        </td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;