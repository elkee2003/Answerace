import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Hompages/HomeScreen/HomeScreen'
import Gallery from '../Hompages/Gallery/Gallery';

const HomePageRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />

        {/* for invalid route */}
        <Route path='*' element={<div style={{marginTop:'200px',textAlign:'center', fontSize:'30px', fontWeight:'bold', color:'rgb(192, 191, 191)'}}>404 Not Found</div>}/>
    </Routes>
);


export default HomePageRoutes;