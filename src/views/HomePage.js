import React from 'react';
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
import LatestVideos from '../components/TrendingThisWeek';
import TopBrands from '../components/TopBrands';
import Footer from '../components/Footer';
import BottomFrame from '../components/BottomFrame';

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
                <EditorChoice />
                <HomeJumbotrone />
                <div className="m-5">
                    <InternalCampaign />
                </div>
                <LatestArticles />
                <LatestReviews />
                <PopularGroup />
                <LatestVideos />
                <TopBrands />
                <Footer />
                <div className="mt-4">
                    <BottomFrame />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
