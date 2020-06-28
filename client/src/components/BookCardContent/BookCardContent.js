import React from "react"

function BookCardContent(props) {
    return (
        <>
            <div className="row justify-content-between mt-3">
                <div className="col-7 col-lg-8 col-xl-10">
                    <h5 className="" style={{ textAlign: "start" }}>{props.title}</h5>
                </div>
                <div className="col">
                    <a href={props.infoLink} target="blank">
                        <button type="button"
                            className="btn btn-primary">View
                                    </button>
                    </a>
                    <button type="button"
                        className="btn btn-success ml-2"
                        name={props.id}
                        onClick={props.saveBook}>{props.saveBookText}
                                </button>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-8 col-md-10">
                    <p style={{ textAlign: "start" }}>{props.subtitle || "No Subtitle Available"}</p>
                    <p style={{ textAlign: "start" }}>
                        Written By: {props.authors.join(", ")}</p>
                </div>
            </div>
            <div className="row mt-4 justify-content-between">
                <div className="col">
                    <img className="" alt={props.title}
                        src={props.thumbnail}
                        style={{ textAlign: "start" }} />
                </div>
                <div className="col-8">
                    <p className="" style={{ textAlign: "start" }}>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default BookCardContent