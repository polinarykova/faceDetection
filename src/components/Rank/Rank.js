import React from "react";

const Rank = ({name, entries}) => {
    return(
        <div style={{display:'flex', flexDirection:'row',alignSelf:'center', justifyContent:'center', width:'100%', marginRight:'350px'}}>
            <h2> {name}, your current entry count is <p className="f2">#{entries}</p></h2>
        </div>
    );
};
 
export default Rank;