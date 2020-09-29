import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
import { ChevronRight } from 'react-bootstrap-icons'
import '../styles/style.css'
import bgSilver from '../assets/silver-bg.png'

const LatestReviews = () => {
    // const latestReview = useSelector((state) => state.mainReducer.latestReview)
    // const loadingState = useSelector((state) => state.mainReducer.loadingState)

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Latest Reviews</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">So you can make better purchase decision</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={bgSilver} height={250}
                            alt="First slide"
                            />
                            <div className="img-text-edit">
                                Center
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={bgSilver} height={250}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default LatestReviews;
