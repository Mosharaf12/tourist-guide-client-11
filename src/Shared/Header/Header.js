import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.error(error);
    })
  }

    const menuItems = <>
    <li><NavLink to='/'>HOME</NavLink></li>
    <li><NavLink className='m-2' to='/blog'>BLOG</NavLink></li>
    {
      user?
      <>
      <li><NavLink to='/reviews'>MY REVIEWS</NavLink></li>
      <li><NavLink to='/addservices'>ADD SERVICES</NavLink></li>
      <li><button onClick={handleLogOut}>LOG OUT</button></li>
      
      </>
      :
      <li><NavLink to='/login'>LOGIN</NavLink></li>
    }
    </>
    return (

        <div className="navbar glass rounded-b-xl fixed z-10 max-w-[1240px]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
       
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">TOURIST GUIDE</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItems}
     
    </ul>
  </div>
  <div className="navbar-end">
    <h3 className='mx-3'>
      {user?.displayName ? user.displayName : ''}
    </h3>
    <Link>
      {
        user?
        <img title={user.displayName} style={{height: '40px',width: '40px' ,borderRadius: '50px'}} src={user?.photoURL} alt="" />
        
        
        :
        <FaUser></FaUser>
      }
    </Link>
  </div>
</div>
    );
};

export default Header;