import React from 'react';
import axios from 'axios';

const baseURL = 'https://api.formcake.com/api/form/0d18e489-8207-4c91-b8cd-4ecd9acd07f7/submission'

class Cta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedUp: false,
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        

        if (localStorage.getItem('state')) {
            const {signedUp, email} = JSON.parse(localStorage.getItem('state'));
            this.setState({signedUp, email})
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
       const data = await axios.post(baseURL, {
            email: this.state.email
        })
        if (!data.email || data.email === '') {
            return;
        }
        return this.setState({
            signedUp: true
        }, () => {
            localStorage.setItem('state', JSON.stringify(this.state))
            return this.state
        })

    }

    handleChange(event) {
        this.setState({email: event.target.value})
      
    }

    render() {
        const tagLine = 'say it with paintball - call us to book your next event or party today'
        if (!this.state.signedUp) {
            return (
                    <section className="cta">
                    <div className="container">
                        <h3>{tagLine}</h3>
                        <span></span>
                        
                        <form action="" style={{display: "none"}} onSubmit={this.handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="email" aria-label="email"></label>
                                <input type="text" id="email" placeholder="Enter email or call us for special events" value={this.state.email} onChange={this.handleChange}/>
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </section>
                
            )
        } else {
            return (
                <section className="cta">
                    <div className="container">
                        <h3>{tagLine}</h3>
                        <span>Thank you, {this.state.email}</span>
                        
                    </div>
                </section>
            )
        }
        
    }
}

export default Cta;