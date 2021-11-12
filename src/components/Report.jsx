import React, { Component } from 'react'

export default class Report extends Component {
    render() {
        return (
            <div>
                <h1>NIT Durgapur</h1>
                <img src={this.props.src} alt={this.props.name}/>
                <h2>{this.props.name}</h2>
                <h3>CGPA: {this.props.cgpa}</h3>
                <p> This data is Authenic #TESTING</p>
            </div>
        )
    }
}
