import * as React from 'react';
import '../styles/components/brand-bar.scss'

const BrandBar = () => {
    const year = new Date().getFullYear();
    return (
        <div className="brand-bar">
            <p>&copy; <span> {year} </span>Website Developed By <a href="https://protoweb.io" style={{
                fontFamily: "Montserrat",
                textDecoration: "none",
                textTransform: "lowercase"
            }}>protoweb digital solutions</a>.</p>
        </div>
    )
}

export default BrandBar;