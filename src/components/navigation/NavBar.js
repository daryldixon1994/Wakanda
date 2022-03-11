import React from "react";
import Logo from "../../assets/Vector.svg";
import "./NavBar.css";
function NavBar() {
    return (
        <div className="navigation">
            <div className="navbar">
                <div className="container">
                    <div className="left">
                        <img src={Logo} alt="wanakanda-logo" />
                        <h1 title="logo-text">Wakanda</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <li style={{ width: "42px", height: "19px" }}>
                                Home
                            </li>
                            <li style={{ width: "62px", height: "19px" }}>
                                About us
                            </li>
                            <li style={{ width: "89px", height: "19px" }}>
                                How it works
                            </li>
                            <li style={{ width: "99px", height: "19px" }}>
                                For Freelancer
                            </li>
                        </ul>

                        <div className="Makers-button">
                            <h5>Get Started</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
