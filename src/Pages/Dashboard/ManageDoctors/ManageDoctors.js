import { useQuery } from '@tanstack/react-query';
import { Avatar, Button, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);
    const openModal = (doctor) =>{
        setToggleModal(true)
        setDeletingDoctor(doctor)
    }

    const { data: doctors, isLoading, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://medimarto-doctor-portal-server.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    if(isLoading){
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    const handleDeleteDoctor = doctor =>{
        fetch(`https://medimarto-doctor-portal-server.vercel.app/doctors/${doctor?._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
           if(data.deletedCount > 0){
            refetch();
            setToggleModal(false);
            toast.success(`Doctor ${doctor.name} deleted successfully`)
           }
        })
    }
    return (
        <div>
            <h3 className='text-3xl text-center'>Manage Doctors: {doctors?.length}</h3>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3">
                                Avater
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Speciality
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors && doctors?.map((doctor, i) => <tr key={doctor._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {i + 1}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Avatar
                                        alt="avatar"
                                        img={doctor.image}
                                        rounded
                                    />
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {doctor.name}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {doctor.email}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {doctor.speciality}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Button className='bg-red-600' onClick={()=>openModal(doctor)}>Delete</Button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && 
                <ConfirmationModal 
                    show={toggleModal}
                    close={() => setToggleModal(false)} 
                    title={`Are you sure you want to delete?`} 
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone`} 
                    deletingDoctor={deletingDoctor}
                    successButtonName = "Delete" 
                    successAction={handleDeleteDoctor}
                    ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;