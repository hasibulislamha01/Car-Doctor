import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/UserManagement/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate();
    // console.log(user)

    const handleLogout = () => {
        // console.log('user is logged out')
        logoutUser()
        .then(()=>{
            toast.success('Logout Successful')
            navigate('/')
        })
        .catch((error)=>{
            toast.error(error.message)
        })
        console.log(user)
        
    }

    const navItems =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 text-lg font-medium' : 'text-gray-400  text-lg font-medium'}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-500 text-lg font-medium' : 'text-gray-400  text-lg font-medium'}>About</NavLink>
            <NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-500 text-lg font-medium' : 'text-gray-400  text-lg font-medium'}>Services</NavLink>
            <NavLink to='/orders' className={({ isActive }) => isActive ? 'text-orange-500 text-lg font-medium' : 'text-gray-400  text-lg font-medium'}>Orders</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-500 text-lg font-medium' : 'text-gray-400  text-lg font-medium'}>Contact</NavLink>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="text-lg text-orange-300">User</div>
                {
                    user ?
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 space-y-2 rounded-box w-52">
                            <NavLink onClick={handleLogout}> Logout </NavLink>
                        </ul>
                    :
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 space-y-2 rounded-box w-52">
                            <NavLink to='/login' className='btn btn-sm'>Login</NavLink>
                            <NavLink to='/register' className='btn btn-sm'>Register</NavLink>
                        </ul>
                }
            </div>

        </>
    return (
        <div className="navbar bg-base-100 flex items-center">
            <Toaster></Toaster>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Car doctor</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline border-2 border-orange-400 text-orange-500 hover:bg-orange-400 hover:border-orange-400">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;