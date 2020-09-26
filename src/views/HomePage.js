import React from 'react';

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
            <NavigationBar/>
            <MenuBar />
            <TopFrame />
            <Billboard />
            <EditorChoice />
            <HomeJumbotrone />
            <InternalCampaign />
            <LatestArticles />
            <LatestReviews />
            <PopularGroup />
            <LatestVideos />
            <TopBrands />
            <Footer />
            <BottomFrame />
        </div>
    );
}

export default HomePage;
