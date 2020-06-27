import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./header.css"

function Header() {

    return (
        <section className="container-fluid">
            <header className="row justify-content-around mr-0 mr-lg-5" id="header">
                <Logo />
                <Nav />
            </header>
        </section>

    )
}

export default Header