import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {
      user?
      <>
      <li><Link to='/reviews'>My Reviews</Link></li>
      <li><Link to='/addservices'>Add Services</Link></li>
      <li><button onClick={handleLogOut}>Log Out</button></li>
      
      </>
      :
      <li><Link to='/login'>Login</Link></li>
    }
    </>
    return (

        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
       
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">Tourist Guide</Link>
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