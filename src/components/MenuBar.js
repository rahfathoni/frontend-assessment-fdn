import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'
import '../styles/style.css'

const MenuBar = () => {
    return (
        <div className="border-edit-2">
            <Container>
                    <Row className="text-center">
                        <Col className="m-2">
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>SKINCARE</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>MAKE UP</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>BODY</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>HAIR</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>FRAGRANCE</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>NAILS</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>TOOLS</strong></Link>
                            <Link to="#" className="ml-2 mr-2"><strong style={{color: 'black'}}>BRANDS</strong></Link>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default MenuBar;
