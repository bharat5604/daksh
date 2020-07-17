import React from 'react';
import {Carousel, Button} from 'react-bootstrap';

const Home = () => {
    return(
        <div className="home-main">
                <Carousel interval={5000}>
                    <Carousel.Item>
                        <img src="img/slider-1.jpg" className="img-fluid" alt=""/>
                        <Carousel.Caption className="caption1">
                            <h3>Life Insurance</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque tincidunt ultricies accumsan. Suspendisse </p>
                            <Button variant="light">Get free Call Back</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="img/slider-2.jpg" className="img-fluid" alt=""/>
                        <Carousel.Caption className="caption2">
                            <h3>Finding the best <br/> Life insurance company </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque tincidunt ultricies accumsan. Suspendisse</p>
                            <Button variant="light">Get a Quote</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="img/slider-3.jpg" className="img-fluid" alt=""/>
                        <Carousel.Caption className="caption3">
                            <h3>Finding the best <br/> Life insurance company </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque tincidunt ultricies accumsan. Suspendisse</p>
                            <Button variant="primary">Get a Quote</Button>
                            <Button variant="warning">Get a Quote</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* our products */}
                <div className="our_product">
                    <div className="container">
                        <div className="heading">
                            <h3>Our Products</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product">
                                    <img src="img/product-1.jpg" className="img-fluid" alt=""/>
                                    <div className="product_content">
                                        <h3>car insurance</h3>
                                        <p>Insurance fraud puts an extra $70 on the price of every annual car insurance premium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product">
                                    <img src="img/product-2.jpg" className="img-fluid" alt=""/>
                                    <div className="product_content">
                                        <h3>life insurance</h3>
                                        <p>Insurance fraud puts an extra $70 on the price of every annual car insurance premium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product">
                                    <img src="img/product-3.jpg" className="img-fluid" alt=""/>
                                    <div className="product_content">
                                        <h3>home insurance</h3>
                                        <p>Insurance fraud puts an extra $70 on the price of every annual car insurance premium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product">
                                    <img src="img/product-4.jpg" className="img-fluid" alt=""/>
                                    <div className="product_content">
                                        <h3>travel insurance</h3>
                                        <p>Insurance fraud puts an extra $70 on the price of every annual car insurance premium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product">
                                    <img src="img/product-5.jpg" className="img-fluid" alt=""/>
                                    <div className="product_content">
                                        <h3>business insurance</h3>
                                        <p>Insurance fraud puts an extra $70 on the price of every annual car insurance premium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product">
                                    <img src="img/product-6.jpg" className="img-fluid" alt=""/>
                                    <div className="product_content">
                                        <h3>landlord insurance</h3>
                                        <p>Insurance fraud puts an extra $70 on the price of every annual car insurance premium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* our products */}

                {/* Find an agent */}
                <div className="call_us">
                    <h3>Find Information And Get Free <br/> Insurance Quotes.</h3>
                    <h4>Call us <a href="Tel:9199886799">+91 9199 886 799</a></h4>
                </div>
                {/* Find an agent */}

                {/* contact Information */}
                <div className="contact">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="from_contact">
                                <div className="heading">
                                    <i className="fa fa-envelope-o"></i>
                                    <h3>Send us a Message</h3>
                                </div>
                                <form action="" id="form">
                                    <div className="form-group">
                                        <label htmlFor="name">your name</label>
                                        <input type="text" name="name" className="form-control" placeholder="e.g. bharat"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">your phone</label>
                                        <input type="text" name="phone" className="form-control" placeholder="e.g. 919999999"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">your email</label>
                                        <input type="email" name="email" className="form-control" placeholder="e.g. bh****@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Message</label>
                                       <textarea name="" id="" className="form-control"  rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="submit form" className="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="contat_information">
                                <div className="heading">
                                    <i className="fa fa-map-marker"></i>
                                    <h3>Contact Information</h3>
                                </div>
                                <div className="address">
                                    <p> <b>A:</b> 8th floor, 379 Hudson St, New York, NY 10018</p>
                                    <p><b>P:</b> +91 9199 886 799</p>
                                    <p><b>F:</b> +91 9199 886 799</p>
                                    <p><b>E:</b> bhu***696@gmail.com</p>
                                </div>

                                <div className="ours_open">
                                    <div className="heading">
                                        <i className="fa fa-clock-o"></i>
                                        <h3>Hours of Operation</h3>
                                    </div>

                                    <div className="ours">
                                        <p><span>Monday</span> <span>08:00 AM - 05:00 PM</span></p>
                                        <p><span>Tuesday</span> <span>08:00 AM - 05:00 PM</span></p>
                                        <p><span>Wednesday</span> <span>08:00 AM - 05:00 PM</span></p>
                                        <p><span>Thursday</span> <span>08:00 AM - 05:00 PM</span></p>
                                        <p><span>Friday</span> <span>08:00 AM - 05:00 PM</span></p>
                                        <p><span>Saturday</span> <span>Appointment Only</span></p>
                                        <p><span>Sunday</span> <span>Appointment Only</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact Information */}
        </div>
    )
}

export default Home;