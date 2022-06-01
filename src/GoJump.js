import React from "react";

import { useHistory } from "react-router-dom";

function GoJump() {
    const history = useHistory();
    
    return (
        <button type="button" onClick={() => history.go(3)}>
            Forward
        </button>//back would be -3 or any -number  
    )
}

export default GoJump;