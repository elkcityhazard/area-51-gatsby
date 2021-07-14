import * as React from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header'
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact'
import '../styles/global.scss'


// markup
const IndexPage = () => {
  return (
   <main>
     <Header>
       <NavBar />
     </Header>
     <About></About>
     <Pricing></Pricing>
     <Contact></Contact>
   </main>
  )
}

export default IndexPage
