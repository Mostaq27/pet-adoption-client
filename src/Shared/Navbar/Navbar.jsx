import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.jpg'
// import avatarImg from '../../assets/placeholder.jpg'
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => { console.log(error) })
  }

  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/Pet_Listing">Pet Listing</Link></li>
    <li><Link to="/donation_campaigns">Donation Camp</Link></li>
   

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
      <Link to='/'>
      <div className="btn btn-ghost text-xl">
          <img src={logoImg} className='h-12 rounded-2xl' alt="" />
          <a className='invisible md:visible'>PawsNest</a>
        </div>
      </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end pr-10">
        {
          user?
          <>
          <div className="dropdown  dropdown-left dropdown-bottom">
          <label tabIndex={0} className="btn btn-ghost rounded-btn ">
            <div className=' md:block'>
              {/* Avatar */}
              <img
                className='rounded-full'

                src={user?.photoURL}
                alt='profile'
                height='30'
                width='30'
              />
            </div>
          </label>
          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li className='btn btn-sm btn-ghost'><Link to="/dashboard">Dashboard</Link></li>
            <li onClick={handleLogOut} className="btn btn-sm btn-ghost" >LogOut</li>
          </ul>
        </div>
        </>
        :
        <>
        <button className='btn btn-ghost'><Link to="/login">Log In</Link></button>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;