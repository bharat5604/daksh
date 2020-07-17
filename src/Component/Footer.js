import React from 'react';
import logo from '../logo.png';


const Footer = () =>{
       
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="in_foot">
                            <h3>Quick links</h3>
                                <ul>
                                    <li><a href="#!">Car Insurance</a></li>
                                    <li><a href="#!">home Insurance</a></li>
                                    <li><a href="#!">life Insurance</a></li>
                                    <li><a href="#!">travel Insurance</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="in_foot" style={{marginTop:"40px"}}>
                                
                                <ul>
                                    <li><a href="#!">Car Insurance</a></li>
                                    <li><a href="#!">home Insurance</a></li>
                                    <li><a href="#!">life Insurance</a></li>
                                    <li><a href="#!">travel Insurance</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="in_foot">
                                <h3>Contact Us</h3>
                                    <p><b>A:</b> 8th floor, 379 Hudson St, New <br/> York, NY 10018</p>
                                    <p> <b>P:</b> (+1) 96 716 6879</p>
                                    <p> <b>E:</b> contact@site.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgfooter">
                    <div className="container">
                        <div className="bg_left">
                            <p>Copyright © 2016 Designed by AuThemes. All rights reserved.</p>
                        </div>
                        <div className="bg_right">
                            <a href="#!">About</a>
                            <a href="#!">Contact Us</a>
                            <a href="#!">Term & Conditions</a>
                            <a href="#!">Privacy Policy</a>
                            <a href="#!">Sites Map</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
}

export default Footer;
