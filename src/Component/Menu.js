import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Menu = () => {
    return(
       <header>
           {/*top header*/}
           <div className="top-header">
               <div className="container">
                   <div className="top_left">
                       <p>Welcome to insurance company, we're here to help you</p>
                   </div>
                   <div className="top_right">
                       <p>
                           <a href="#!">Get a Quote</a>
                           <a href="#!">Find an Agent</a>
                           <a href="#!">Pricing</a>
                           <a href="#!">FAQS</a>
                       </p>
                   </div>
               </div>
           </div>
           {/*top header*/}

           {/*middle header */}
            <div className="middle-header">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-lg-3  d-lg-block d-md-none d-none-sm d-none">
                            <div className="logo">
                                <img src="logo.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-9  my-auto">
                            <div className="row h-100">
                                <div className="col-md-4 col-lg-3 col-6 d-lg-block ">
                                    <div className="middle_help">
                                        <div className="middle_icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="middle_content">
                                            <p>
                                                Need Help?
                                                <a href="#!">+91 9199 886 799</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4 col-lg-3 d-lg-block  d-none-md d-none">
                                    <div className="middle_help">
                                        <div className="middle_icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="middle_content">
                                            <p>
                                              
                                                <a href="#!">8th floor, 379 Hudson St <br/> New York, NY 10018</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4 col-lg-3 d-lg-block  d-none-sm d-none">
                                    <div className="middle_help">
                                        <div className="middle_icon">
                                            <i className="fa fa-clock-o"></i>
                                        </div>
                                        <div className="middle_content">
                                            <p>
                                                07:30 am - 05:30 pm
                                                <a href="#!">Every Day</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4 col-6 col-lg-3 offset-md-4 offset-lg-0  my-auto">
                                    <a href="#!" className="text-uppercase middle_btn">Get a quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* middle header */}

           {/* navbar header */}
            <Navbar  expand="lg">
                <div className="container">
                    <Navbar.Brand className="d-lg-none d-xl-none d-md-block"> <img src="logo.png" width="200" class="img-fluid" alt=""/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-nav" />
                    <Navbar.Collapse id="my-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#!">insurance</Nav.Link> */}
                        <NavDropdown title="insurance" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#!" >Life Insurance</NavDropdown.Item>
                            <NavDropdown.Item href="#!" >Education Insurance</NavDropdown.Item>
                            <NavDropdown.Item href="#!">Life Insurance</NavDropdown.Item>
                            <NavDropdown.Item href="#!">marriage insurance (kanyadn plan)</NavDropdown.Item>
                            <NavDropdown.Item href="#!">salary saving scheme</NavDropdown.Item>
                            <NavDropdown.Item href="#!">money back</NavDropdown.Item>
                            <NavDropdown.Item href="#!">retirement plan</NavDropdown.Item>
                        </NavDropdown>
                       <NavDropdown title="general insurance" id="collasible-nav-dropdown">
                           <NavDropdown.Item href="#!">car insurance</NavDropdown.Item>
                           <NavDropdown.Item href="#!">bike insurance</NavDropdown.Item>
                           <NavDropdown.Item href="#!">home insurance</NavDropdown.Item>
                           <NavDropdown.Item href="#!">shop insurance</NavDropdown.Item>
                       </NavDropdown>
                       <NavDropdown title="health insurance" id="collasible-nav-dropdown">
                           <NavDropdown.Item href="#!">car insurance</NavDropdown.Item>
                           <NavDropdown.Item href="#!">FAMILY FLAOTER MEDICLAIM</NavDropdown.Item>
                           <NavDropdown.Item href="#!">INVIDUAL MEDICLAIM</NavDropdown.Item>
                           <NavDropdown.Item href="#!">SPECIALIZED MEDICLAIM FOR SENIOR CITIZEN</NavDropdown.Item>
                           <NavDropdown.Item href="#!">DIBETIC PLAN</NavDropdown.Item>
                           <NavDropdown.Item href="#!">PLAN FOR HEART DISEASE</NavDropdown.Item>
                       </NavDropdown>
                       <NavDropdown title="lic plans" id="collasible-nav-dropdown">
                           <NavDropdown.Item href="#!">jeevan anand</NavDropdown.Item>
                           <NavDropdown.Item href="#!">JEEVAN LABH</NavDropdown.Item>
                           <NavDropdown.Item href="#!">JEEVAN LAKSHAY</NavDropdown.Item>
                           <NavDropdown.Item href="#!">jeevan UMANG</NavDropdown.Item>
                           <NavDropdown.Item href="#!">money back</NavDropdown.Item>
                           <NavDropdown.Item href="#!">jeevan tarun</NavDropdown.Item>
                           <NavDropdown.Item href="#!">TERM INSURANCE (JEEVAN AMAR)</NavDropdown.Item>
                           <NavDropdown.Item href="#!">jeevan shanti</NavDropdown.Item>
                           <NavDropdown.Item href="#!">jeevan rakshak</NavDropdown.Item>
                       </NavDropdown>
                       <NavDropdown title="free policy servicing">
                           <NavDropdown.Item href="#!">nomination change</NavDropdown.Item>
                           <NavDropdown.Item href="#!">mode change</NavDropdown.Item>
                           <NavDropdown.Item href="#!">name change</NavDropdown.Item>
                       </NavDropdown>
                       <Nav.Link href='#!'>contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
           {/* navbar header */}
       </header>
    )
}

export default Menu;