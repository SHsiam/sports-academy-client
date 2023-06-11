import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from "react";
import useClass from "../../../hooks/useClass";

const NavMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const [classed]=useClass();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

    const navOption=<>
      <li ><Link to='/'>Home</Link></li>
        <li>
         <Link to='/instructors'>Instructors</Link>
         
        </li>
        <li ><Link to='/class'>Classes</Link></li>
        <li ><Link to='/dashboard'>Dashboard</Link></li>
        <li>
            <Link to="/">
                <button className="btn">
                    <FaCartPlus  className='text-sky-600'></FaCartPlus >
                    <div className="badge badge-secondary">+{classed?.length || 0}</div>
                </button>
            </Link>
        </li>
        
    </>
    return (
        <div>
           <div className="navbar bg-sky-600 ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-white rounded-box w-52">
      {navOption}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img className="w-16 h-8" src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end text-white">
  {
            user ?<span className='text-primary'>
            <div className="avatar">
              <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 inline-block w-10 h-10 ">
                <img title={user.displayName}
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </div>
            <button onClick={handleLogOut} className="text-white">Logout</button></span> :  <Link className='text-decoration-none text-white font-bold' to='/login'><small className="font-semibold text-white">Login</small></Link>
        }

  </div>
</div>
        </div>
    );
};

export default NavMenu;