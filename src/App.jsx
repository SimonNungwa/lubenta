import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import LiveAuctions from './pages/LiveAuctions';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Nav />
                        <Banner />
                        <div id="about" className="py-8 px-4 sm:px-6 lg:px-8">
                            <About />
                        </div>
                        <div id="services" className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
                            <Services />
                        </div>
                        <div id="contact">
                            <Footer/>
                        </div>
                    </>
                } />
                <Route path="/live-auctions" element={<LiveAuctions />} />
            </Routes>
        </Router>
    );
};

export default App;
