import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'
import '../styles/style.css'

const MenuBar = () => {
    return (
        <div className="border-edit-2 bg-white">
            <Container className="text-center">
                    <Row>
                        <Col className="m-2">
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>SKINCARE</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>MAKE UP</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>BODY</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>HAIR</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>FRAGRANCE</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>NAILS</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>TOOLS</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black', fontSize: "15px"}}>BRANDS</strong></Link>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default MenuBar;
