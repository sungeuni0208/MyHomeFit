import React, {useRef} from 'react';
import "../css/Training/Training.css"
import IconTraining from "../images/icon_training.png"
import IconNextVideo from "../images/icon_next_video.png"
import PoseShoulder from "../images/pose_shoulder.png"
import MenuUp from "../images/menu_up.png"
import NextPose from "../components/Training/NextPose";
import Webcam from "react-webcam";

import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier'

const Training = () => {

    const camera = useRef();
    const figures = useRef();

    const btnA = useRef();
    const btnB = useRef();
    const btnC = useRef();
    const btnExport = useRef();

    let net;
    /**
     * @type {KNNClassifier}
     */
    const classifier = knnClassifier.create();
    const webcamElement = camera.current;
    console.log('Loading mobilenet..');


    const run = async () => {

        net = await mobilenet.load();
        const webcam = await tf.data.webcam(webcamElement, {
            resizeHeight: 534,
            resizeWidth: 870
        });
        const addExample = async classId => {
            // Capture an image from the web camera.

            const img = await webcam.capture();

            // Get the intermediate activation of MobileNet 'conv_preds' and pass that
            // to the KNN classifier.
            const activation = net.infer(img, true);

            // Pass the intermediate activation to the classifier.
            classifier.addExample(activation, classId);

            // Dispose the tensor to release the memory.
            img.dispose();
        };


        btnA.current.addEventListener('click', () => addExample('cup'));
        btnB.current.addEventListener('click', () => addExample('bottle'));
        btnC.current.addEventListener('click', () => addExample('phone'));


        while (true) {
            if (classifier.getNumClasses() > 0) {

                const img = await webcam.capture();
                // Get the activation from mobilenet from the webcam.
                const activation = net.infer(img, 'conv_preds');
                // Get the most likely class and confidence from the classifier module.
                const result = await classifier.predictClass(activation);

                //const result = await net.classify(img);

                if (figures.current) {
                    //const classes = ['A', 'B', 'C'];
                    figures.current.innerText = `
        prediction: ${result.label} \n
        probability: ${result.confidences[result.label]}
        `;
                    //figures.current.innerText = `Prediction: ${ result[0].className } \n probability: ${ result[0].probability } `;
                }
                img.dispose();
            }
            await tf.nextFrame();
        }
    };
    React.useEffect(() => {
        if (camera.current) { run(); }
    }, [camera]);

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
                    <div className="next-video-label">
                        Next<img src={IconNextVideo}/>
                    </div>
                    <div className="next-video-pose">
                        <img src={PoseShoulder}/>
                    </div>
                </div>
                <div className="realtime-video">
                    <div className="user-video">

                        <div ref={figures}></div>

                        {/* <img ref={refImg} crossorigin src="https://i.imgur.com/JlUvsxa.jpg" width="227" height="227" /> */}

                        <Webcam className="user-webcam"
                                width="870" height="534"/>

                        <webcam
                                autoPlay playsInline muted={true}
                                ref={camera}
                                width="870" height="534"></webcam>

                        <div>
                            <button ref={btnA}> add cup</button>
                            <button ref={btnB}> add Bottle</button>
                            <button ref={btnC}> add phone</button>
                        </div>

                    </div>
                    <div className="export-video" />
                </div>
                <div className="next-pose">
                    <NextPose background_color="rgba(240, 237, 237, 0.4)"/>
                    <NextPose background_color="#b6f4ea"/>
                    <NextPose background_color="#b6f4ea"/>
                    <NextPose background_color="#b6f4ea"/>
                </div>
            </div>
        </div>
    );
};

export default Training;