import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/style.css'
import SilverBg from '../assets/silver-bg.png'

const InternalCampaign = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <Container>
                        <Image style={{border: "solid #94a4a2"}}
                        width={790} height={250} src={SilverBg} alt="Internal campaign" />
                        <div className="img-text-edit">
                            Horizontal 970x250
                            <p>(Internal Campaign only)</p>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default InternalCampaign;
