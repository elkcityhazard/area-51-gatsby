import * as React from "react";
import Layout from '../components/Layout'
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact'
import Background from '../components/Background'
import Cta from '../components/Cta'
import Events from '../components/Events'
import '../styles/global.scss'


// markup
const IndexPage = ({children}) => {
  return (
    <Layout>
    <div className="wrapper">
      <main>
     <About></About>
     <Background>
    <Cta />
       
        </Background>
     <Pricing></Pricing>
     <Events />
     <Contact></Contact>
   </main>
   
    </div>
    </Layout>
  )
}

export default IndexPage
