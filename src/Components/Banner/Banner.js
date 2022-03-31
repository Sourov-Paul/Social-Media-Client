import React from 'react';
import './Banner.css';
import { useState,useEffect } from 'react';


const Banner = () => {

    const [setUsers]=useState('')

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[setUsers])



    return (
        <div className='mainBanner'>
            <div className="maincontent  ">
                <div className=' container icons'>
                    <div className="backIcons">
                        <span className='backIconI'><i class="fa-solid fa-arrow-left"></i></span>
                    </div>
                    <div className="joinGroupIcon">
                        <button className='joinNow'>Join Group</button>
                    </div>
                </div>
                <div className="row container m-auto pt-5">
                    <div className="first col-sm-8 col-md-8 col-lg-8">
                        <span className=' engineering'>Computer Engineering</span>
                        <p className='followar'>18976 Computer Engineers follow this</p>
                        </div>
                    <div className="  col-sm-4 col-md-4 col-lg-4"> </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;