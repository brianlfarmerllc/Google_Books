import React from "react";

function Card({children}) {
    return (
        <div class="card m-5 p-3" >
            <div class="container">
                {children}
            </div>
        </div>
    )
}

export default Card