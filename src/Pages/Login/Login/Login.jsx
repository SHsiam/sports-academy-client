import  { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/login.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
     event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
  };

  return (
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
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 bg-sky-600 text-white rounded p-2"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-sky-600 text-white" type="submit" value="Login" />
            </div>
          </form>
          <p className="font-bold mx-4">
            <small>
              New Here? <Link className="text-sky-600" to="/register">Create an account</Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
