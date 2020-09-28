import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Star, StarFill } from 'react-bootstrap-icons'
import '../styles/style.css'

const HomeJumbotron = () => {
    const editorChoice = useSelector((state) => state.mainReducer.editorChoice)
    const loadingState = useSelector((state) => state.mainReducer.loadingState)

    function ratingStar(rating){
        let getRating = String(rating)[0]
        if (getRating === '0'){
            return <><Star className="mr-1"/>
            <Star className="mr-1"/>
            <Star className="mr-1"/>
            <Star className="mr-1"/>
            <Star/>
            </> 
        }
        else if (getRating === '1'){
            return <><StarFill className="mr-1"/>
            <Star className="mr-1"/>
            <Star className="mr-1"/>
            <Star className="mr-1"/>
            <Star/>
            </> 
        }
        else if (getRating === '4' ){
            return <><StarFill className="mr-1"/>
            <StarFill className="mr-1"/>
            <StarFill className="mr-1"/>
            <StarFill className="mr-1"/>
            <Star/>
            </>
        }
    }

    function cardJumbotron(){
        if(loadingState === 'stop'){
            return (
                <Container>
                    <Row>
                        {editorChoice.slice(0, 3).map((editor, i) => {
                            return <Col key={i} className='mt-1 pr-2 pl-2'>
                                        <Card bg='white' text='dark' style={{border: "1px solid white", borderRadius: '4%'}}>
                                            <Col xs={1}></Col>
                                            <Col>
                                                <Link to="#">
                                                    <Card.Img style={{height: '170px', width: 'auto' }} 
                                                    variant="top" src={editor.product.image} className='mt-2' />
                                                </Link>
                                            </Col>
                                            <Col xs={1}></Col>
                                                <Card.Body className="pr-1 pl-2">
                                                    <Link to="#">
                                                        <Card.Text className='mb-1' style={{color: '#be1854', fontWeight: 'bold'}}>
                                                            Match Skin Type
                                                        </Card.Text>
                                                    </Link>
                                                    <Card.Text className="mb-2">
                                                        <span className="mr-1"><strong>{editor.product.rating}</strong></span>{ratingStar(editor.product.rating)} &nbsp;&nbsp;({editorChoice.length})
                                                    </Card.Text>
                                                    <Link to="#">
                                                        <Card.Text style={{fontWeight: "bolder", color: "black"}} className="mb-0">{editor.product.name}</Card.Text>
                                                    </Link>
                                                    <Card.Text className="mt-0">{editor.product.description}</Card.Text>
                                                </Card.Body>
                                        </Card>
                                    </Col>
                        })}
                    </Row>
                </Container>
            )
        }
        else if (loadingState === 'start'){
            return (
                <Container className="text-center">
                    <Row>
                        <Col>
                            <h1>LOADING LOADING</h1>
                        </Col>
                    </Row>
                </Container>
            )
        }
        else {
            return (
                <Container className="text-center">
                    <Row>
                        <Col>
                            <h1>ERROR ERROR ERROR</h1>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

    return (
        <Jumbotron className="p-4" style={{backgroundColor: "pink"}}>
            <Container >
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={3}>
                        <br/><br/>
                        <p style={{fontSize: '20px'}}><strong>
                            Looking for products that are just simply perfect for you?
                        </strong></p>
                        <p style={{fontSize: '17px'}}>
                            Here are some products that we believe match your skin, hair, and 
                            body! Have we mentioned that they solve your concerns too?
                        </p>
                        <br />
                        <p className="text-right">
                            <Button style={{backgroundColor: '#be1854', border: 'solid #be1854'}}>
                                <span style={{fontSize: '17px'}}>See My Matches</span>
                            </Button>
                        </p>
                    </Col>
                    <Col className='pl-0'>
                        {cardJumbotron()}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HomeJumbotron;
