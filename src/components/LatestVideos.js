import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import '../styles/style.css'

const LatestVideos = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Latest Videos</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">Watch and learn, ladies</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>VIDEOS</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default LatestVideos;
