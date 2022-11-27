import React from 'react';
import Advertices from '../Advertices/Advertices';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertices></Advertices>
            <Footer></Footer>

        </div>
    );
};

export default Home;