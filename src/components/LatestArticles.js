import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ChevronRight } from 'react-bootstrap-icons'
import '../styles/style.css'

const LatestArticles = () => {
    const latestArticles = useSelector((state) => state.mainReducer.latestArticles);
    const loadingState = useSelector((state) => state.mainReducer.loadingState);

    function articleCard(){
        if(loadingState === 'stop'){
            return (
               latestArticles.map((article, i) => {
                   return <Col key={i} md={4}>
                            <Card style={{border: 'none'}} className="pt-2 pb-2">
                                <Link to="#">
                                    <Card.Img variant="top" src={article.image} style={{borderRadius: '15px', width: 'auto', height: '180px'}}/>
                                </Link>
                                <Card.Body className="pl-0 pr-0">
                                    <Link to="#">
                                        <Card.Title className='pb-3' style={{fontSize: '22px', fontWeight: 'bolder', color: 'black'}}>{article.title}</Card.Title>
                                    </Link>
                                    <Card.Subtitle className="text-muted">
                                        <span style={{color: 'grey', fontWeight: 'bolder'}}>{article.author} </span> | &nbsp;
                                        <span style={{opacity: '0.5'}}>{article.published_at}</span>
                                    </Card.Subtitle>
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
                    <div style={{fontSize: '22px'}}><strong>Latest Articles</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">So you can make better purchase decision</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                {articleCard()}
            </Row>
        </Container>
    );
}

export default LatestArticles;
