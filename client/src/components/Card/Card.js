import React from "react";

function Card({children}) {
    return (
        <div className="card mt-3 mb-3 p-2" >
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Card