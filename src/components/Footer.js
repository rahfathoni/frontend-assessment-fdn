import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/style.css'

import GooglePlay from '../assets/google-play.png'
import AppStore from '../assets/app-store.png'
import FDNLogo from '../assets/logo-crop.jpg'
import Facebook from '../assets/facebook.png'
import Youtube from '../assets/youtube.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <div className='border-edit-3 bg-white'>
            <Container>
                <Row className="mt-3">
                    <Col sm={3}>
                        <Link to="#"><p className="text-bold-edit">About Us</p></Link>
                        <Link to="#"><p className="text-bold-edit">Feedback</p></Link>
                        <Link to="#"><p className="text-bold-edit">Contact</p></Link>
                    </Col>
                    <Col sm={3}>
                        <Link to="#"><p className="text-bold-edit">Term & Condition</p></Link>
                        <Link to="#"><p className="text-bold-edit">Privacy Policy</p></Link>
                        <Link to="#"><p className="text-bold-edit">Help</p></Link>
                    </Col>
                    <Col sm={3}>
                        <Link to="#"><p className="text-bold-edit">Awards</p></Link>
                        <Link to="#"><p className="text-bold-edit">Newsletter</p></Link>
                    </Col>
                    <Col sm={3}>
                        <p className="text-bold-edit">Download Our Mobile App</p>
                            <Row style={{marginTop: "26px"}}>
                                <Col>
                                    <Link to="#">
                                        <Image 
                                        className=""
                                        style={{position: "absolute"}}
                                        src={AppStore} width={130} height={40}/>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="#">
                                        <Image 
                                        className=""
                                        style={{position: "absolute"}}
                                        src={GooglePlay} width={130} height={40}/>
                                    </Link>
                                </Col>
                            </Row>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col sm={9}>
                        <Image src={FDNLogo} width={150} height={30}/>
                        <p style={{fontSize: '15px'}} className="text-muted">
                            Copyright &copy; 2015-2017 Female Daily Network &#8226; All rights reserved
                        </p>
                    </Col>
                    <Col sm={3}>
                        <div>
                            <Link to="#" className='pr-2 pl-1'>
                                <Image src={Facebook} height={32}/>
                            </Link>
                            <Link to="#" className='pr-2 pl-1'>
                                <Image src={Twitter} height={32}/>
                            </Link>
                            <Link to="#" className='pr-2 pl-1'>
                                <Image src={Instagram} height={32}/>
                            </Link>
                            <Link to="#" className='pr-2 pl-1'>
                                <Image src={Youtube} height={32}/>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
