import React from 'react';
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap'
import '../styles/style.css'
import logo from '../assets/logo-crop.jpg'
import { Search, List, PersonCircle } from 'react-bootstrap-icons'

const NavigationBar = () => {
    return (
        <div className="border-edit">
            <Container className="bg-white">
                <Row>
                    <Col sm={3} className="mr-0 p-0">
                        <Button variant="link" className="pr-1">
                            <List color="dark" size={40} className="pt-0"/>
                        </Button>
                        <Image className="m-0 p-0" src={logo}/>
                    </Col>
                    <Col className="mt-1 ml-0 pl-0">
                        <InputGroup>
                            <InputGroup.Prepend style={{borderRightStyle: 'none'}} >
                                <InputGroup.Text as="button" className="bg-white">
                                    <Search />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl style={{borderLeftStyle: 'none'}} placeholder="Search products, article, topics, brands, etc" />
                        </InputGroup>
                    </Col>
                    <button sm={1} className="button-edit">
                        <span className="ml-3 mr-3"><PersonCircle className="mr-2" /> LOGIN / SIGNUP</span>
                    </button>
                </Row>
            </Container>
        </div>
    );
}

export default NavigationBar;
