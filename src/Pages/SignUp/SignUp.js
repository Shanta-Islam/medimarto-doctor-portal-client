import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = data => {
        // console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created SuccessFully');
                const userInfo = {
                    displayName: data.name
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://medimarto-doctor-portal-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }
    
    return (
        <Card className='container mx-auto my-40 max-w-md'>
            <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl mx-auto">Signup</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
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
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        placeholder="type password"
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: 'password must have upparcase number and special characters' }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } })}
                        type="password"
                    />
                    {errors.password && <p className="text-red-600 text-sm" role="alert">{errors.password?.message}</p>}
                </div>
                <Button type="submit" className='bg-primary w-full mt-4'>Submit</Button>
                <div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </div>
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary'>Please login</Link></p>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
            <div>
                <button className='flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 font-semibold text-white p-2 w-full mx-auto rounded-lg'>
                    <svg className='w-5 mr-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                    <span>Login with Google</span>
                </button>
            </div>
        </Card>
    );
};

export default SignUp;