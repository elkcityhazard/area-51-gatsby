import * as React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {StaticImage} from 'gatsby-plugin-image';

class Contact extends React.Component {



    render () {
        const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.475055588926!2d-85.11357778523848!3d44.852622882063926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881fe32c1c982593%3A0xf8bb784fd02c9001!2sArea%2051%20Paintball!5e0!3m2!1sen!2sus!4v1626293246810!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

        return (
            <section className="contact" id="contact">

               <h3>Contact Us</h3>
               <div className="contact-container">
               <StaticImage  objectFit="cover" src='../images/paintball-squad.jpg' alt="a paintballer squad" placeholder="blurred" loading="lazy" imgClassName="card-img"  layout="fullWidth" style={{gridArea: "1/1"}} />
                   <div className="col" style={{
                       backgroundColor: "rgba(0,0,0,0.5)",
                       gridArea: "1/1",
                       position: "relative",
                       display: "grid",
                       placeItems: "center"
                       }}>
                       <h3>We Are Here To Help You</h3>
                       <address>
                           <h4>Area 51 Paintball</h4>
                           <span>3005 Westwood Rd NE, Mancelona, </span>
                           <span>MI 49659</span>
                           <span><a href="tel:+12315776252">(231) 577-6252</a></span>
                           <span><a href="mailto:a51valkencup@gmail.com">a51valkencup@gmail.com</a></span>
                           <span>
                               <a title="facebook" aria-label="facebook link" href="https://www.facebook.com/A51Paintball/" rel="noreferrer nofollow" target="_blank"><FaFacebook to="https://www.facebook.com/A51Paintball/" size="20" /></a></span>
                       </address>

                   </div>
                   <div className="col" dangerouslySetInnerHTML={{__html: iframe}}>
                   </div>
               </div>
            </section>
        )
    }
}


export default Contact;