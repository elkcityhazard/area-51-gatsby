import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby'

const HeaderData = ({children}) => {
    const data = useStaticQuery(graphql`
    query mainHeader {
       site {
         siteMetadata {
           title
           description
           subtitle
         }
       }
     }
     `);
    
     const {title, description, subtitle} = data.site.siteMetadata;
    console.log(data.site.siteMetadata);
    return (
        <header className="main-header">
            {children}
            <div className="col">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            </div>
            <div className="col">
                <Link to="#contact">Contact Us Now</Link>
            </div>
        </header>
    )
    }

   export default HeaderData;