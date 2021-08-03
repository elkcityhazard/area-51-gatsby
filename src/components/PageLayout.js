import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import BrandBar from './BrandBar'

function PageLayout({children}) {
    return (
        <>
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
