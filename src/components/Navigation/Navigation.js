import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return(
         <nav>
            <h4 onClick={() => onRouteChange('signout') } className="f3 link dim black underline pointer tr mr5">Sign out</h4>
         </nav>
        );
    } else {
    return (
        <> 
        <nav>
            <h3 onClick={() => onRouteChange('register')} className="f4 link dim black underline pointer tr mr5">Register</h3>
        <h3 onClick={() => onRouteChange('signin')} className="f4 link dim black underline pointer tr mr5">Sign in</h3>
        </nav>
        </>
    );
    }
}

export default Navigation;