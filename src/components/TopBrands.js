import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image} from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import '../styles/style.css'

import Nivea from '../assets/nivea-crop.jpg'
import TheOrdinary from '../assets/theordinary.png'
import TheBodyShop from '../assets/thebodyshop-crop.jpg'
import SkII from '../assets/sk-ii-crop.jpg'
import Maybelline from '../assets/maybeline.jpeg'
import InnisFree from '../assets/innisfree-crop.jpg'

const TopBrands = () => {
    const [brands] = useState(
        [{logo: Nivea}, 
        {logo: TheOrdinary},
        {logo: TheBodyShop},
        {logo: SkII},
        {logo: Maybelline},
        {logo: InnisFree}])

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Top Brands</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">We all know and love</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-4">
                {brands.map((brand, i) => {
                    return <Col className="pt-4 pb-0" key={i} style={{margin: '0px', textAlign: 'center'}}>
                            <Image src={brand.logo} style={{maxWidth: '70%', maxHeight: '70%', transform: 'translate( 0, -50%)'}} />
                        </Col>
                })}
            </Row>
            <Row>
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Female Daily - Find everything you want to know about beauty on Female Daily</strong></div>
                    <div style={{fontWeight: '500'}}>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anythig!</div>
                    <div className="pt-0 mt-0" style={{fontWeight: '500'}}>We are here to be your friendly solution to all things beauty, inside and out!</div>
                </Col>
            </Row>
        </Container>
    );
}

export default TopBrands;
