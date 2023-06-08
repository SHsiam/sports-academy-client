import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'

const NavMenu = () => {

    const navOption=<>
      <li ><Link to='/'>Home</Link></li>
        <li>
         <Link to='/instructors'>Instructors</Link>
         
        </li>
        <li ><Link to='/classes'>Classes</Link></li>
        <li ><Link to='/dashboard'>Dashboard</Link></li>
        
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
<Link to='/login'>Login</Link>
  </div>
</div>
        </div>
    );
};

export default NavMenu;