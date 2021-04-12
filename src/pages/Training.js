import React from 'react';
import "../css/Training/Training.css"
import IconTraining from "../images/icon_training.png"
import IconNextVideo from "../images/icon_next_video.png"
import PoseShoulder from "../images/pose_shoulder.png"
import MenuUp from "../images/menu_up.png"
const Training = () => {
    return (
        <div className="menu2-container">
            <div className="menu2-title">
                <div>
                    <h5>Gaok, R U Ready?</h5>
                    <img src={IconTraining}/>
                </div>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="50" fill="white"></circle>
                </svg>
            </div>
            <div className="menu2-small-title">
                <label>Start your Fitness.</label>
            </div>
            <div className="videos">
                <img src={MenuUp}/>
                <div className="next-video">
                    <div>
                        Next
                    </div>
                    <img src={PoseShoulder}/>
                </div>
                <div className="user-video">
                </div>
                <div>
                    <div className="next-videos" id="just-next-video"></div>
                    <div className="next-videos"></div>
                    <div className="next-videos"></div>
                    <div className="next-videos"></div>
                </div>
            </div>
        </div>
    );
};

export default Training;