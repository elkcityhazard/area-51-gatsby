import * as React from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header'
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact'
import Footer from '../components/Footer';
import BrandBar from '../components/BrandBar'
import SEO from '../components/SEO';
import '../styles/global.scss'


// markup
const IndexPage = ({data}) => {
  return (
    <>
    
    <div className="wrapper">
      <main>
     <Header>
       <NavBar />
     </Header>
     <About></About>
     <Pricing></Pricing>
     <Contact></Contact>
   </main>
   <Footer></Footer>
   <BrandBar />
    </div>
    </>
  )
}

export default IndexPage