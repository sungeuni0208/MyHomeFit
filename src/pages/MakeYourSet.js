import React from 'react';
import '../css/MakeYourSet/MakeYourSet.css';
import IconSet from '../images/icon_makeyourset.png';
import SendIcon from '../images/url_send.png';
import RightIcon from '../images/menu_right_clicked.png';
import PreviewImg from '../images/running2.png';
import StretchImg from '../images/stretch.png';
import SquatImg from '../images/squat.png';

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
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
                <div className="box-wrapper">
                    <div className="block"><img src={RightIcon} className="send-icon"></img></div>
                    <div className="arrow-box" ><img src={PreviewImg} className="preview-img"></img></div>
                </div>
               
    
            </div>
                <ul className="exercise-list">
                    <li>
                        
                        <div className="list-img"><img src={StretchImg}></img></div>
                        <div className="list-text"><text>10회 반복</text></div>
                        
                    </li>
                    <li>
                        <div className="list-content">
                        <div className="list-img"><img src={SquatImg}></img></div>
                        <div className="list-text"><text>10회 반복</text></div>
                        </div>
                    </li>
                    <li>
                        <div className="list-content">
                        <div className="list-img"><img src={PreviewImg}></img></div>
                        <div className="list-text"><text>10회 반복</text></div>
                        </div>
                    </li>
                    <li>
                        <div className="list-content">
                        <div className="list-img"><img src={StretchImg}></img></div>
                        <div className="list-text"><text>10회 반복</text></div>
                        </div>
                    </li>
                    <li>
                        <div className="list-content">
                        <div className="list-img"><img src={SquatImg}></img></div>
                        <div className="list-text"><text>10회 반복</text></div>
                        </div>
                    </li>
                   
                </ul>
            <div className="time-box">
                <p>총 6개의 동작 추출</p>
                <p>예상 소요 시간: 00:20:00</p>
            </div>
        </div>
    );
};

export default MakeYourSet;