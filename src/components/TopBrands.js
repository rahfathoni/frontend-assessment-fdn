import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import '../styles/style.css'

const TopBrands = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Top Brands</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">We all know and love</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Brand logo</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Female Daily - Find everything you want to know about beauty on Female Daily</strong></div>
                    <div style={{fontWeight: '500'}}>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anythig!</div>
                    <div className="pt-0 mt-0" style={{fontWeight: '500'}}>We are here to be your friendly solution to all things beauty, inside and out!</div>
                </Col>
            </Row>
        </Container>
    );
}

export default TopBrands;
