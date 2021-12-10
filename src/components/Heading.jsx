import React from "react";

function Heading(props) {

    function handleRefresh() {
        props.onRefresh(props.id);
    }

    return (
        <div className="refresh">
            <h1 className="no-tour-left">No Tours Left</h1>
            <button onClick={handleRefresh} className="refresh-btn">Refresh</button>
        </div>
    )
}

export default Heading;
