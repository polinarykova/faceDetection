import React from "react";
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start' }} className="ml5 mt0">
          <Tilt reset={false}>
                <img style={{ paddingRight:'100px', height: '200px', width: '200px', minWidth:'200px', minHeight:'200px'}} src="https://cdn-icons-png.flaticon.com/512/5060/5060170.png" alt="logo" />
         </Tilt>
        </div>
        
    );
};

export default Logo;

