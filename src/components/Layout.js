import React from 'react'
import NavBar from './NavBar';
import GbiBridged from './Header'
import HeaderData from './HeaderData'
import Footer from './Footer';
import BrandBar from './BrandBar'

function Layout({children}) {
    return (
        <>
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
