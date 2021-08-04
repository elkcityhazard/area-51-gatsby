import * as React from "react";
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact'
import Background from '../components/Background'
import Cta from '../components/Cta'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import '../styles/global.scss'

const meta = {
  title: "Area 51 Paintball",
  description: "Area 51 Paintball is the premier paintball facility in Northern Michigan. We are located in Mancelona, Michigan. The best paintball experience is ensured by our professional staff who have years of experience hosting paintball matches.",
  image: '/images/area-51-logo.jpg',
  pathname: '/'

}


// markup
const IndexPage = ({children}) => {
  return (
    <Layout>
      <SEO
      title={meta.title}
      description={meta.description || 'Wooded Paintball located near Mancelona, Micigan'}
      image={meta.image}
      pathname={meta.pathname}
      article
    />
    <div className="wrapper">
      <main>
     <About></About>
     <Background>
    <Cta />
       
        </Background>
     <Pricing></Pricing>
     <Events />
    <Gallery />
     <Contact></Contact>
   </main>
   
    </div>
    </Layout>
  )
}

export default IndexPage
