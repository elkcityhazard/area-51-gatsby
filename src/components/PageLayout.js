import React from 'react'
import Helmet from 'gatsby-plugin-react-helmet'

import NavBar from './NavBar';
import Footer from './Footer';
import BrandBar from './BrandBar'

function PageLayout({children}) {
    return (
        <>
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
        </Helmet>
            <NavBar></NavBar>
            <main className="page">
                <article className="page-article">
                {children}
                </article>
            </main>
    <Footer key="0"></Footer>
   <BrandBar />
        </>
    )
}

export default PageLayout
