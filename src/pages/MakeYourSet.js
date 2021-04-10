import React from 'react';
import '../css/MakeYourSet/MakeYourSet.css';
import IconSet from '../images/icon_makeyourset.png';
import SendIcon from '../images/url_send.png';
import RightIcon from '../images/menu_right_clicked.png';

const MakeYourSet = () => {
    return (
        <div className="content">
            <div className="menu1-wrapper">
                <div className="menu1-container">
                    <div className="menu1-title">
                        <div>
                            <h5>Only for you, Gaok</h5>
                            <img src={IconSet}/>
                        </div>

                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="white"></circle>
                        </svg>
                    </div>
                    <div className="menu1-small-title">
                        <label>Enter Fitness Youtube Video URL.</label>
                    </div>
                        <div className="url-container">
                            <label>URL</label>
                            <input className="url-input"></input>
                            <img src={SendIcon} className="url-button"
                            onClick={(e)=>{
                            }}></img>
                        </div>
                    </div>
                    <div id="trapezoid"></div>
                    <label>Make Your Fitness Set.</label>
            </div>
            <div className="block-box">
                <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                <div className="block"><img src={RightIcon} className="send-icon"></img></div>
            </div>
        </div>
    );
};

export default MakeYourSet;