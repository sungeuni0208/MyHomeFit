import React from 'react';
import '../css/MakeYourSet/MakeYourSet.css';
import IconSet from '../images/icon_makeyourset.png';

const MakeYourSet = () => {
    return (
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
            </div>
            <div id="trapezoid"></div>
        </div>
    );
};

export default MakeYourSet;