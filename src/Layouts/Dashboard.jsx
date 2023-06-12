import { FaAddressCard, FaBook, FaCartPlus, FaHome,  FaUsers, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useClass from "../hooks/useClass";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const [items] = useClass();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer drawer-mobile lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
        </div>
        <div className="drawer-side bg-sky-600 text-white">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80">
  
                 {
                          isAdmin ? <>
                              <li><NavLink to="/dashboard/manageclass"><FaBook></FaBook> Manage Classes</NavLink></li>
                              <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                              
                          </> : 
                          isInstructor ?
                          <>
                         
                          <li><NavLink to="/dashboard/myclasses"><FaWallet></FaWallet> My Classes</NavLink></li>
                          <li><NavLink to="/dashboard/addclass"> <FaAddressCard></FaAddressCard>Add Class</NavLink></li>
                          
                      </>
                          :<>
                              <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                              <li>
                                  <NavLink to="/dashboard/mycart"><FaCartPlus></FaCartPlus> My Cart
                                      <span className="badge inl badge-secondary">+{items?.length || 0}</span>
                                  </NavLink>
  
                              </li>
                          </>
                      }
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                <li><NavLink to="/class"> Our Class</NavLink></li>
                <li><NavLink to="/instructors">Instructors</NavLink></li>
            </ul>
  
        </div>
    </div>
    );
};

export default Dashboard;