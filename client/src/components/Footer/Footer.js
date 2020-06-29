/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./Footer.css"

let today = new Date()
let year = today.getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <hr style={{ borderTopColor: "#4285F4", width: "95%" }} />
      <div className="container">
        <div className="row justify-content-between mt-4">
          <div className="col-s-6 col-md-3">
            <h6>Page Navigation</h6>
            <ul className="footer-links">
              <li><a href="/">Search</a></li>
              <li style={{marginLeft: "1em"}}><a href="/saved">Saved</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <p className="copyright-text" style={{textAlign: "center"}}>Copyright &copy; <span id="copyright">2020-{year}</span> All Rights Reserved by
                <a href="https://github.com/brianlfarmerllc" target="blank" style={{ color: "#4285F4" }}> BrianLFarmerLLC</a>
            </p>
          </div>

          <div className="col-md-3 col-sm-12 col-xs-12">
            <ul className="social-icons">
              <li><a className="github" href="https://www.github.com/brianlfarmerllc/" target="blank"><i
                className="fa fa-github"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/BrianLFarmerLLC" target="blank"><i
                className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer