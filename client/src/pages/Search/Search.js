import React from 'react';
import "./search.css"
import Card from "../../components/Card/Card"

function Search() {
    return (
        <div className="container-fluid">
            <Card>
                <h2 class="display-4" style={{ textAlign: "center" }}>React Built Google Books Search</h2>
                <p class="lead" style={{ textAlign: "center" }}>Search for and save books of interest</p>
            </Card>
        </div>
    )
}

export default Search

