import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import login from '../../../assets/login.jpg'
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const[passwordError,setPasswordError]=useState();

    const onSubmit = data => {
        // console.log(data);
        
        const password=data.password;
        const confirmPassword=data.confirmPassword;
        if(password !==confirmPassword){
            setPasswordError('Password is not matching');
        }

        createUser(data.email,password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image: data.photoURL }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-sky-50">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold my-2">Sign up now!</h1>
                        <img className="w-1/2 rounded-2xl" src={login} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-sky-200">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Do not have a capital letter, Do not have a special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirmPassword", {
                                    required: true,
                                })} placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirmPassword && <span className="text-red-600">Confirm Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-sky-600 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="font-bold mx-4"><small>Already have an account? <Link className='text-sky-600' to="/login">Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                   
                </div>
              
            </div>
            <p>{passwordError}</p>
        </div>
        
    );
};

export default Register;