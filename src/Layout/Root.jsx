import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;