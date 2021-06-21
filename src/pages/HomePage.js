import React from 'react'

import Header from 'parts/Header'
import Hero from 'parts/HomePage/Hero'
import BrowseRoom from 'parts/HomePage/BrowseRoom'
import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import useScrollAnchor from 'helper/hooks/useScrollAnchor'



export default function HomePage(props) {
    useScrollAnchor();
    
    return (
        <>
            <Header theme="white" position="absolute" />
            <Hero />
            <BrowseRoom />            
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
