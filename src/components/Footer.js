import React, {Component} from 'react';
import {Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <img src="assets/images/blue.JPG" alt="firstcar" height="170"></img>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <img src="assets/images/green.JPG" alt="firstcar" height="170"></img>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <img src="assets/images/red.JPG" alt="firstcar" height="170"></img>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <img src="assets/images/yellow.JPG" alt="firstcar" height="170"></img>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="container">
                        <h2 class="text-center">LATEST NEWS </h2>
                        <hr></hr>
                </div>

                <div class="container" data-aos="fade-up">
                        <div class="row">
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <h5 className="title-news" ><img src="assets/images/news1.JPG" alt="news1" height="110"></img> NEWS 1</h5>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <h5 className="title-news" ><img src="assets/images/news2.JPG" alt="news1" height="110"></img> NEWS 2</h5>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <h5 className="title-news" ><img src="assets/images/news3.JPG" alt="news1" height="110"></img> NEWS 3</h5>
                            </div>
                        </div>
                </div>
                <br></br>

                <div>
                    <Navbar className="navbar" expand="lg">
                        <div className="container">
                            <h4 className="footer-heading"><b>Browse Through Your Product Libarary!</b></h4>
                            <form>
                                    <div className="search d-none d-sm-block">
                                        <input className=" search-txt-footer" placeholder="Search Products" />
                                        <Link className="search-btn" to={"#"} >
                                            <i class="fas fa-search"></i>
                                        </Link>
                                    </div>
                                </form>
                        </div>
                    </Navbar>
                </div>
                <br></br>

                <footer class="footer">
                    <div className="container">
                        <div className="row ">
                            <div className="col-3 col-sm-3">
                                <img src="assets/images/logo.png" alt="logo" height="50"></img>
                                <ul class="list-unstyled">
                                    <li>contact@example.com</li>
                                    <li>+1 234-787-777</li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-3">
                                <h4>Our Policy</h4>
                                <ul>
                                    <li>Mobile Phone</li>
                                    <li>Laptop</li>
                                    <li>Headphone</li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-3">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>Blog</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-3">
                                <h4>Subscribe to our Newletter</h4>
                                <form>
                                    <div className="search">
                                        <input className="search-txt-footer" placeholder="Enter Your Email" />
                                        <Link className="search-btn-footer" to={"#"} >
                                            Submit
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="text-center">Copyright.All Rights reserved</div>
                </footer>

            
            </div>
        );
    }
}