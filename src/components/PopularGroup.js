import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { ChevronRight, ChatSquareText, ListUl, PersonFill } from 'react-bootstrap-icons'
import '../styles/style.css'

import defaultPic from '../assets/defaultIMG.png'

const PopularGroup = () => {
    const [people] = useState(
        [{
            img: defaultPic,
            title: 'Embrace the Curl',
            description: 'May our curls pop and never stop!'
        }, {
            img: defaultPic,
            title: 'Embrace the Curl',
            description: 'May our curls pop and never stop!'
        }, {
            img: defaultPic,
            title: 'Embrace the Curl',
            description: 'May our curls pop and never stop!'
        },{
            img: defaultPic,
            title: 'Embrace the Curl',
            description: 'May our curls pop and never stop!'
        }]
    )

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Popular Groups</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">Where the beauty TALK are</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                {people.map((person, i) => {
                    return <Col key={i}>
                            <Card bg='white' text='dark' style={{borderRadius: '4%', }} className="shadow p-3 mb-5 bg-white rounded text-center" >
                                <Col xs={1}></Col>
                                <Col>
                                    <Image style={{height: '140px', width: '140px', borderRadius: '50%', border: '1px solid #dce4e3'}}
                                    variant="top" src={person.img} className="p-0"/>
                                </Col>
                                <Col xs={1}></Col>
                                    <Card.Body className="pr-1 pl-1 pt-2">
                                        <Card.Title style={{fontWeight: "bolder", color: "black"}}>{person.title}</Card.Title>
                                        <Card.Text className="mb-0 mt-4">
                                            <Row>
                                                <Col>
                                                    <Link to='#'>
                                                        <PersonFill style={{color: 'black' }}/>
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    <Link to="#">
                                                        <ListUl style={{color: 'black' }}/>
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    <Link to="#">
                                                        <ChatSquareText style={{color: 'black' }}/>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                        <Card.Text className="mt-0">{person.description}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                })}
            </Row>
        </Container>
    )
}

export default PopularGroup;
