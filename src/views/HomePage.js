import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import '../styles/style.css'

import NavigationBar from '../components/NavigationBar';
import MenuBar from '../components/MenuBar';
import TopFrame from '../components/TopFrame';
import Billboard from '../components/Billboard';
import EditorChoice from '../components/EditorChoice';
import HomeJumbotrone from '../components/HomeJumbotron';
import InternalCampaign from '../components/InternalCampaign';
import LatestArticles from '../components/LatestArticles';
import LatestReviews from '../components/LatestReviews';
import PopularGroup from '../components/PopularGroup';
import LatestVideos from '../components/LatestVideos';
import TrendingThisWeek from '../components/TrendingThisWeek';
import TopBrands from '../components/TopBrands';
import Footer from '../components/Footer';
import BottomFrame from '../components/BottomFrame';
import Mr2 from '../components/Mr2'

const HomePage = () => {
    return (
        <div>
            <div className="navbar-edit">
                <NavigationBar/>
                <MenuBar />
            </div>
            <div style={{marginTop: "110px"}}>
                <div className="m-2">
                    <TopFrame />
                </div>
                <div className="m-4">
                    <Billboard />
                </div>
                <div className="mt-1 mb-4">
                    <EditorChoice />
                </div>
                <div className="pt-3 pb-3">
                    <HomeJumbotrone />
                </div>
                <div className="pt-1 pb-3">
                    <InternalCampaign />
                </div>
                <div className="pt-4 pb-3">
                    <LatestArticles />
                </div>
                <Container className='pl-0 pr-0 pt-3 pb-2'>
                    <Row>
                        <Col sm={8}>
                            <LatestReviews />
                        </Col>
                        <Col>
                            <Mr2 />
                        </Col>
                    </Row>
                </Container>
                <div className="pt-5">
                    <PopularGroup />
                </div>
                <div className="pb-4">
                    <LatestVideos />
                </div>
                <div className="pb-4 pt-1">
                    <TrendingThisWeek />
                </div>
                <div className="pt-1 pb-5">
                    <TopBrands />
                </div>
                <div className="mt-4 mb-3">
                    <Footer />
                </div>
                <div className="mt-4">
                    <BottomFrame />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
