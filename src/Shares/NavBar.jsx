import { Link, NavLink } from "react-router-dom";
import pic from "../assets/user.png";

const NavBar = () => {

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
            to="/register">
            Add Product 
            </NavLink>
          </li>
    
          <li>
           <NavLink  className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2 text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/about">
            My Cart
            </NavLink>
          </li>
    
          <li>
             <NavLink 
             className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2 text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/gallery">
            Log In
            </NavLink>
            
          </li>
          <li>
            <NavLink
             className={({ isActive, isPending }) => 
            isPending ? "pending" 
            : 
            isActive ? "border-b-2 text-green-500 border-b-blue-500 font-bold" : ""} 
            to="/profile">
            User Profile
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
            className="relative text-base md:text-xl hidden md:block"
          >
            <span className="font-bold font-Rancho text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-blue-600">
              Smart TECH 
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="gap-4 menu-horizontal text-lg px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
          {/* <div className="w-12 mr-3">
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
            </div> */}
          </div>
          {/* <div>
            {
              user?.email ? <div><h1 className="text-base inline mr-3">{userProfile?.displayName}</h1> <button className="font-bold" onClick={signOut}>Log Out</button></div>
              :
               <Link to="/login" className="btn">
               <button>Log In</button>
            </Link>
            }
          </div> */}
        </div>
      </div>
        </div>
    );
};

export default NavBar;