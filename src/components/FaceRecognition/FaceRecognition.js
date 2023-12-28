import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageURL, box}) => {
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <div className="absolute mt2">
                <img id='inputImage' alt='' src={imageURL} height='300px' width='auto'/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;