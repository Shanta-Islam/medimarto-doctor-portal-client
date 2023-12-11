import { useQuery } from '@tanstack/react-query';
import { Button, Label, Select, Spinner, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key; 
    const navigate = useNavigate();
    
    const {data: specialities, isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async()=>{
            const res = await fetch('https://medimarto-doctor-portal-server.vercel.app/appointmentSpeciality');
            const data = await res.json();
            return data;
        }
    })
    
    const handleAddDoctor = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgData=> {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor ={
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: imgData.data.url
                }


                //save doctor information to the database
                fetch('https://medimarto-doctor-portal-server.vercel.app/doctors', {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=> res.json())
                .then(result=>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/managedoctors')
                })
            }
        })
    
    }

    if(isLoading){
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }
    return (
        <div className='w-96 mx-auto'>
            <h3 className='text-3xl text-center'>Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        placeholder="type name"
                        {...register("name", { required: "Name is required" })}
                        type="text"
                    />
                    {errors.name && <p className="text-red-600 text-sm" role="alert">{errors.name?.message}</p>}
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="type email"
                        {...register("email", { required: "Email address is required" })}
                        type="email"
                    />
                    {errors.email && <p className="text-red-600 text-sm" role="alert">{errors.email?.message}</p>}
                    <div className="mb-2 block">
                        <Label
                            htmlFor="countries"
                            value="Select your country"
                        />
                        <Select id="countries" {...register('speciality')}
                            required>
                            <option>Please Pick a Speciality</option>
                            {
                                specialities.map(speciality=> <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)
                            }
                        </Select>
                    </div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo1"
                            value="Your photo"
                        />
                    </div>
                    <TextInput
                        id="photo1"
                        placeholder=""
                        {...register("image", { required: "Photo is required" })}
                        type="file"
                    />
                    {errors.img && <p className="text-red-600 text-sm" role="alert">{errors.img?.message}</p>}
                </div>
                <Button type="submit" className='bg-primary w-full mt-4'>Add Doctor</Button>
                {/* <div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </div> */}
            </form >
        </div >
    );
};

export default AddDoctor;