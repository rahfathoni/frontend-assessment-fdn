import React from 'react';
import { Container, Row, Col, Card, Media, Image } from 'react-bootstrap'
import '../styles/style.css'

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
                    <h1>Trending card</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default TrendingThisWeek;
