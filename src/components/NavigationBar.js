import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap'
import '../styles/style.css'
import logo from '../assets/logo-crop.jpg'
import { Search, List, PersonCircle } from 'react-bootstrap-icons'

const NavigationBar = () => {
    return (
        <div className="border-edit bg-white">
            <Container>
                <Row>
                    <Col xs={2} className="mr-0 p-0">
                        <Button variant="link" className="pr-2">
                            <List color="dark" size={25} className="pt-0"/>
                        </Button>
                        <Link to="/">
                            <Image 
                            className="ml-0 mr-0 pl-0 pr-0 mt-2 mb-2"
                            style={{position: "absolute"}}
                            src={logo} width={120} height={30}/>
                        </Link>
                    </Col>
                    <Col className="mt-1 mb-1 ml-0 pl-0">
                        <InputGroup>
                            <InputGroup.Prepend style={{borderRightStyle: 'none'}} >
                                <InputGroup.Text as="button" className="bg-white">
                                    <Search />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl style={{borderLeftStyle: 'none'}} placeholder="Search products, articles, topics, brands, etc" />
                        </InputGroup>
                    </Col>
                    <button xs={1} className="button-edit">
                        <span className="ml-3 mr-3"><PersonCircle className="mr-2" /> LOGIN / SIGNUP</span>
                    </button>
                </Row>
            </Container>
        </div>
    );
}

export default NavigationBar;
