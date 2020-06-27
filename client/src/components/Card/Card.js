import React from "react";

function Card({children}) {
    return (
        <div className="card m-5 p-3" >
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Card