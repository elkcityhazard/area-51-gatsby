import React from 'react';
import {Link} from 'gatsby';
import Links from '../constants/Links'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/components/navbar.scss'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            height: 0
        }

        //  bind this 

        this.handleClick = this.handleClick.bind(this);

        //  Get scrollHeight of Navbar for smooth scroll

        this.heightRef = React.createRef();

    }

    handleClick(event) {
        if (!this.state.active) {
            this.setState({
                active: true,
                height: this.heightRef.current.scrollHeight
            })

        } else {
            this.setState({
                active: false,
                height: 0
            })
        }
    }
    

    render() {
        return (
            <div className="container" style={{backgroundColor: "transparent"}}>
                <div className="row">
                    <Link to="/" title="Area 51 Paintball">Area <span id="alien">51</span> Paintball</Link>
                    
                <span className="menu-btn" id="toggle">
                 {!this.state.active ? <FaBars onClick={this.handleClick} size={36} /> :   <FaTimes onClick={this.handleClick} size={36} /> }
                </span>
    
                </div>
                <nav ref={this.heightRef} className={this.state.active ? 'nav-bar active': 'nav-bar'} style={{height: this.state.height}}>
                {
                    Links.map((link) => {
                        return <Link key={link.id} to={link.url} activeClassName="active" title={link.description} onClick={this.handleClick}>{link.text}</Link>
                    })
                }
            </nav>
            </div>
        )
    }
}

export default NavBar;