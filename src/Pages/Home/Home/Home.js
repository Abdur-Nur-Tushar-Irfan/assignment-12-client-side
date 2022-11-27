import React from 'react';
import Advertices from '../Advertices/Advertices';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import GetUpdates from '../GetUpdates/GetUpdates';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertices></Advertices>
            <GetUpdates></GetUpdates>
            <Footer></Footer>

        </div>
    );
};

export default Home;