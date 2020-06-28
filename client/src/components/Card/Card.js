import React from "react";

function Card({children}) {
    return (
        <div className="card mt-5 p-2" >
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Card