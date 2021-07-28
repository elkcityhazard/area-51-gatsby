import * as React from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header'
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact'
import Footer from '../components/Footer';
import BrandBar from '../components/BrandBar'
import Background from '../components/Background'
import Cta from '../components/Cta'
import Events from '../components/Events'
import '../styles/global.scss'


// markup
const IndexPage = ({children}) => {
  return (
    <>
    
    <div className="wrapper">
      <main>
     <Header>
       <NavBar />
     </Header>
     <About></About>
     <Background>
    <Cta />
       
        </Background>
     <Pricing></Pricing>
     <Events />
     <Contact></Contact>
   </main>
   <Footer></Footer>
   <BrandBar />
    </div>
    </>
  )
}

export default IndexPage
