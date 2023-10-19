import { Outlet } from "react-router-dom";
import NavBar from "../Shares/NavBar";
import Footer from "../Shares/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;