import { Link, NavLink, useNavigate } from "react-router-dom";
import pic from "../assets/user.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  
  const [theme , setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.theme = 'light');

  useEffect( ()=> {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme])

  const handleToggle = (e) => {
    if(e.target.checked){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }
  

  useEffect(() => {
    
    if (user) {
      setUserProfile({
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  const signOut = () => {
    logOut()
    .then(() => {
      toast.success('user signed out');
      navigate('/');
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

    const navLinks = (
        <>
          <li>
            <NavLink
            className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2  text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/">
            Home
            </NavLink>
          </li>
          <li>
             <NavLink
            className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2 text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/addProduct">
            Add Product 
            </NavLink>
            
          </li>
    
          <li>
           <NavLink  className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2 text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/myCart">
            My Cart
            </NavLink>
           
          </li>
    
          <li>
             <NavLink 
             className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2 text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/login">
            Sign In
            </NavLink>
            
          </li>

    
        </>
      );

    return (
        <div>
        
                  <div className="navbar shadow-lg border-b-2 border-b-gray-400">
        {" "}
        {/* Add the shadow-lg class */}
        <div className="navbar-start">
        
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="gap-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          
          <Link
            to="/"
            className="relative text-base md:text-xl md:block"
          >
            <span className="flex items-center gap-3 font-bold font-Rancho text-xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-blue-600">
            <img className="w-12 md:w-14 rounded-full" src="https://i.ibb.co/WHMxydj/20231018-181707-0000.png" alt="" />
              Smart TECH 
            </span>
          </Link>
        </div>
        
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="gap-4 menu-horizontal text-lg px-1">{navLinks}</ul>
        </div>
        
        <div className="navbar-end">
        <label className="swap swap-rotate mr-4">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" 
  onClick={handleToggle}
  checked={theme === 'light' ? false : true}
  />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
          <div className="avatar">
          <div className="w-12 mr-3">
              {
                user?.email ? (
                <>
                  <div >
                    
                  <img className="rounded-full mr-3" src={userProfile?.photoURL} />
                  </div>
                </>
              ) : (
                <>
               
                  <div>
                  <img src={pic} alt="Guest" />
                  </div>
               
                </>
              )
              }
            </div>
          </div>
          <div>
            {
              user?.email ? <div><h1 className="text-base inline mr-3">{userProfile?.displayName}</h1> <button className="font-bold" onClick={signOut}>Log Out</button></div>
              :
               <Link to="/login" className="btn">
               <button>Log In</button>
            </Link>
            }
          </div>
        </div>
      </div>
        </div>
    );
};

export default NavBar;