import React from "react"; 
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
        <div>
            <h1>Click to detect faces in your picture!</h1>
            <div style={{display:'flex', justifyContent:"center"}}>
                <input type='text' className="input" style={{width:'500px'}} onInput={onInputChange}/>
                <button className="button" onClick={onSubmit}>detect</button>
            </div>
        </div>
    );
};

export default ImageLinkForm;