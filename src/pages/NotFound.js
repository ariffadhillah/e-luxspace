import React from 'react'



import Header from 'parts/Header'

import Footer from 'parts/Footer'
import Sitemap from 'parts/Sitemap'
import PageErrorMassage from 'parts/PageErrorMassage'
import Document from 'parts/Document'
export default function NotFound() {

    return (
        <Document>   
            <Header theme="black" />
                <PageErrorMassage />
            <Sitemap />
            <Footer />
        </Document>
    );
}
