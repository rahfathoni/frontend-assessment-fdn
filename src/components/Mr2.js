import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/style.css'
import SilverBg from '../assets/silver-bg.png'

const Mr2 = () => {
    return (
        <Container>
            <Row style={{marginTop: '80px'}}>
                <Col>
                    <Container className="">
                        <Image style={{border: "solid #94a4a2"}}
                        width={300} height={250} src={SilverBg} alt="MR 2" />
                        <div className="img-text-edit text-center">
                            MR 2
                            <p>300x250</p>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Mr2;
