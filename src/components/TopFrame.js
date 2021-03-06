import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/style.css'
import SilverBg from '../assets/silver-bg.png'

const TopFrame = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <Container>
                        <Image style={{border: "solid #94a4a2"}}
                        width={790} height={50} src={SilverBg} alt="Top Frame" />
                        <div className="img-text-edit">Top Frame 970x50</div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default TopFrame;
