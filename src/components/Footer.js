import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Links from '../constants/Links';
import { FaFacebook } from 'react-icons/fa'


const Footer = (props) => {
    return (
        <footer className="main-footer">
            <div className="col">
                <StaticImage src="../images/area-51-logo.jpg" alt="Alien" objectFit="cover" placeholder="blurred" loading="lazy" layout="fixed" height={200} width={325} style={{marginRight: "1em"}}/>
            </div>
            <div className="col">
                <h4>Links</h4>
                <ul>
                    {Links.map((link, index) =>{
                        return <li><Link key={link.id} to={link.url}>{link.text}</Link></li>
                    })}
                </ul>
            </div>
            <div className="col">
                <h4>Address</h4>
                <address>
                           <span>Area 51 Paintball</span>
                           <span>3005 Westwood Rd NE, Mancelona, </span>
                           <span>MI 49659</span>
                           <span><a href="tel:+12315776252">(231) 577-6252</a></span>
                           <span><a href="mailto:a51valkencup@gmail.com">a51valkencup@gmail.com</a></span>
                           <span>
                               <a href="https://www.facebook.com/A51Paintball/" aria-label="facebook link" rel="noreferrer nofollow" target="_blank"><FaFacebook to="https://www.facebook.com/A51Paintball/" size="30" /></a></span>
                       </address>
                       <p style={{padding: ".25em 0",fontSize: "0.66em", textAlign: "left", width: "100%"}}>We are currently opened Saturdays only 9:30am - 5:00pm</p>
                       <p style={{padding: ".25em 0",fontSize: "0.66em", textAlign: "left", width: "100%"}}>We have bathrooms on site</p>
            </div>
        </footer>
    )
}

export default Footer;