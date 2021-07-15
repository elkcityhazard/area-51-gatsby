import * as React from 'react';

export default function() {
    const year = new Date().getFullYear();
    return (
        <div className="brand-bar">
            <p>&copy; <span> {year} </span>Website Developed By <a href="http://andrew-mccall.com" style={{
                textDecoration: "none",
                textTransform: "lowercase"
            }}>protoweb digital solutions</a>.</p>
        </div>
    )
}