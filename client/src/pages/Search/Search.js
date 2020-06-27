import React from 'react';
import "./search.css";
import Card from "../../components/Card/Card";
import { Input, FormBtn } from "../../components/Form/Form";

function Search() {
    return (
        <div className="container-fluid">
            <Card>
                <h2 class="display-4" style={{ textAlign: "center" }}>React Built Google Books Search</h2>
                <p class="lead" style={{ textAlign: "center" }}>Search for and save books of interest</p>
            </Card>
            <Card>
                <form>
                    <h2 class="display-5 mb-4" style={{ textAlign: "start" }}>Book Search</h2>
                    <Input
                        name="booksearch"
                        placeholder="Book Title (required)"
                    />
                    <FormBtn
                        // onClick={handleSubmit}
                    >
                        Search
                    </FormBtn>
                </form>
            </Card>
        </div>
    )
}

export default Search

