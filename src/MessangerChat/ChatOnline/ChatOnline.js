import React from 'react';
import './ChatOnline.css';


const ChatOnline = () => {
    return (
        <div className='chatOnline'>
            <div className="chatOnlineFriedd">
                <div className="chatOnlineImgContainer">
                    <img className='chatOnlineImg' src="https://i.ibb.co/5FJvc5b/img.jpg" alt="" />
                    <div className="chatOnlineBadge">

                    </div>
                </div>
                <span className="chatOnlineName">
                    Sourov
                </span>
            </div>
        </div>
    );
};

export default ChatOnline;