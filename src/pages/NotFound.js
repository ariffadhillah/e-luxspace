import React from 'react'



import Header from 'parts/Header'

import Footer from 'parts/Footer'
import Sitemap from 'parts/Sitemap'
import PageErrorMassage from 'parts/PageErrorMassage'
export default function NotFound() {
    return (
        <>   
        <Header theme="black" />
            <PageErrorMassage />
        <Sitemap />
        <Footer />
        </>
    );
}
