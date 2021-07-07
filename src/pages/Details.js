import React from 'react'

import Header from 'parts/Header'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'
// import JustArrived from 'parts/HomePage/JustArrived'
import Breadcrumb from 'components/Breadcrumb'

// import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import ProductsDetails from 'parts/Details/ProductsDetails'
import Suggestion from 'parts/Details/Suggestion'

import useAsync from 'helper/hooks/useAsync'

import fetch from 'helper/fetch';
import { useParams } from 'react-router-dom'



export default function HomePage() {
    const { idp } = useParams();
    
    const { data, run, isLoading } = useAsync();

    React.useEffect(() => {
      run(
        fetch({ url: `/api/products/${idp}` }));
    }, [run]);
    
    return (
        <>
            <Header theme="black" />

            <Breadcrumb list={[
                { url: "/", name: " Home" },
                { url: "/categories/91231", name: " Office Room " },
                { url: "/categories/91231/products/7888", name: " Details " },
            ]} />
            {
                isLoading ? "Loading..." : <ProductsDetails data={data} />            
            }
            {
                isLoading ? "Loading..." : <Suggestion data={data?.relatedProducts || {}} />
            }
            <Sitemap />
            <Footer />
        </>
    )
}
