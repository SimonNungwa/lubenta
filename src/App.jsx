import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <div id="about">
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
};

export default App;
