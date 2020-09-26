import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/style.css'
import SilverBg from '../assets/silver-bg.png'

const Billboard = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <Container>
                        <Image style={{border: "solid #94a4a2"}}
                        width={790} height={250} src={SilverBg} alt="Billboard" />
                        <div className="img-text-edit">Billboard 970x250</div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Billboard;
