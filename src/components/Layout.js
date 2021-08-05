import React from 'react'
import Helmet from 'gatsby-plugin-react-helmet'
import NavBar from './NavBar';
import GbiBridged from './Header'
import HeaderData from './HeaderData'
import Footer from './Footer';
import BrandBar from './BrandBar'

function Layout({children}) {
    return (
        <>
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
        </Helmet>
        <GbiBridged>
      <HeaderData>
        <NavBar />
      </HeaderData>
    </GbiBridged>
    {children}
    <Footer></Footer>
   <BrandBar />
        </>
    )
}

export default Layout
