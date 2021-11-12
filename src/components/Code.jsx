import React, { Component } from 'react'
import QRCode from 'qrcode'
 
export default class Code extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             URL: ''
        }
    }
    
    componentDidMount() {  
        QRCode.toDataURL("https://verify-nitdgp.web.app/?roll="+this.props.roll)
            .then(url => {
                this.setState({URL:url});
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        return (
            <div>
                <h2>{this.props.roll}</h2>
                <img src={this.state.URL} alt="sample"/>
            </div>
        )
    }
}
