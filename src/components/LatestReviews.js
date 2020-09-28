import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import {} from 'react-redux'
import { ChevronRight } from 'react-bootstrap-icons'
import '../styles/style.css'

const LatestReviews = () => {
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
                    <h1>CARD review</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default LatestReviews;
