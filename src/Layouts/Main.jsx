import { Outlet } from "react-router-dom";
import NavMenu from "../Pages/Share/NavMenu/NavMenu";
import Footer from "../Pages/Share/Footer/Footer";


const Main = () => {
    return (
        <div >
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;