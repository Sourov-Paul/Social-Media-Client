import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from './../../Hooks/UseFirebase/useAuth';
const Header = () => {
    const {user}=useAuth()
    return (
        <div>
          

            <nav className='mainHeader'>
                <div className=' d-flex justify-content-around'>
                    <div className='logo'> <img className='img-fluid' src="https://i.ibb.co/j4s4v1H/whole.png" alt="" /> </div>
                    <div className='search'>
                        <span className="searchTag">
                        <i className="fa-solid fa-magnifying-glass"></i>                     
                           <input placeholder='Search for your favorite groups in ATG' type="search" name="" id="" />
                        </span>
                    </div>
                    {
                        user?.email ?            <h2 className='userLink'>{user.email&& <h2><img className='userImage' src={user.photoURL && "https://i.ibb.co/dcrZchh/Rectangle-3-2.png"} alt="" /> 
                        <Link to='/messangerChat' className="chat"><i class="fa-brands fa-facebook-messenger"></i></Link> <b className='userName'>{user.displayName}</b> </h2> }</h2>

                        :<div ><span className='accountStatus'>Create account. <Link to="login">It's free</Link></span> </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;