import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import '../styles/style.css'
import bgSilver from '../assets/silver-bg.png'

const TrendingThisWeek = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Trending This Week</strong></div>
                    <div className="text-muted">See our weekly most reviewed products</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={bgSilver} height={280}
                            alt="First slide"
                            />
                            <div className="img-text-edit">
                                Center
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={bgSilver} height={280}
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

export default TrendingThisWeek;
