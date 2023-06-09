import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import login from '../../../assets/login.jpg'


const Login = () => {
    const handleLogin=event=>{
        console.log(event)
    }

    
    return (
        <>
             <div className="hero min-h-screen bg-sky-50">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-3xl font-bold my-2 text-center">Login now!</h1>
                        <img className="h-96 w-96 rounded-2xl" src={login} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-sky-200">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>
                            
                            <div className="form-control mt-6">
                                <input className="btn bg-sky-600 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="font-bold mx-4"><small>New Here? <Link className='text-sky-600' to="/register">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;