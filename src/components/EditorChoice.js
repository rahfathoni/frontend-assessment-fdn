import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Media, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import defaultPic from '../assets/defaultIMG.png'
import { Star, StarFill } from 'react-bootstrap-icons'
import '../styles/style.css'

const EditorChoice = () => {
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

    function editorCard(){
        if(loadingState === 'stop'){
            return (
                editorChoice.map((editor, i) => {
                    return <Col key={i} className='mt-1'>
                                <Media>
                                    <Image src={defaultPic} className="img-pic-edit ml-1 mr-2" height={70} width={70}/>
                                    <Media.Body>
                                        <div style={{fontWeight: '700'}}>{editor.editor}</div>
                                        <div style={{fontSize: '15px'}}
                                        className="text-muted">{editor.role}</div>
                                    </Media.Body>
                                </Media>
                                <Card bg='white' text='dark' style={{border: " 1px solid #dce4e3", borderRadius: '4%'}}>
                                    <Col xs={1}></Col>
                                    <Col>
                                        <Link to="#">
                                            <Card.Img style={{height: '200px', width: 'auto' }}
                                            variant="top" src={editor.product.image} className='mt-2' />
                                        </Link>
                                    </Col>
                                    <Col xs="s"></Col>
                                        <Card.Body className="pr-1 pl-1">
                                            <Card.Text className="mb-1">
                                                <span className="mr-1"><strong>{editor.product.rating}</strong></span>{ratingStar(editor.product.rating)} &nbsp;&nbsp;({editorChoice.length})
                                            </Card.Text>
                                            <Link to="#">
                                                <Card.Text style={{fontWeight: "bolder", color: "black"}} className="mb-0">{editor.product.name}</Card.Text>
                                            </Link>
                                            <Card.Text className="mt-0">{editor.product.description}</Card.Text>
                                        </Card.Body>
                                </Card>
                            </Col>
                })
            )

        } else if(loadingState === 'start') {
            return (
                <Container className="text-center">
                    <Row>
                        <Col>
                            <h1>LOADING LOADING</h1>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
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
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Editor's Choice</strong></div>
                    <div className="text-muted">Curated with love</div>
                </Col>
            </Row>
            <Row>
                {editorCard()}
            </Row>
        </Container>
    );
}

export default EditorChoice;
