import React from "react";
import Logo from "../../assets/Vector-f.svg";
import Youtube from "../../assets/footer/Youtube.svg";
import Twitter from "../../assets/footer/Twitter.svg";
import Basket from "../../assets/footer/Basket.svg";
import Instagram from "../../assets/footer/Instagram.svg";
import { FiSend } from "react-icons/fi";
import "./Footer.css";
function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-company-info">
                    <div className="footer-logo">
                        <img src={Logo} alt="logo" width={40} />
                        <h4>Wakanda</h4>
                    </div>
                    <div className="footer-social-links">
                        <a href="#">
                            <img src={Instagram} alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={Basket} alt="basket" />
                        </a>
                        <a href="#">
                            <img src={Twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <img src={Youtube} alt="youtube" />
                        </a>
                    </div>
                    <p>Copyright © 2022 Wakanda. All rights reserved</p>
                </div>
                <div className="footer-links">
                    <div className="footer-col1">
                        <h1>Company</h1>
                        <ul>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>How it woks</li>
                            <li>For freelancer</li>
                        </ul>
                    </div>
                    <div className="footer-col2">
                        <h1>Support</h1>
                        <ul>
                            <li>Help center</li>
                            <li>Terms of service</li>
                            <li>Legal</li>
                            <li>Privacy policy</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div className="footer-col3">
                        <h1>Subscribe to our newsletter</h1>
                        <form className="input-icons">
                            <i className="fa fa-user icon">
                                <FiSend color="white" size={24} />
                            </i>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Your email adress"
                            />
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
