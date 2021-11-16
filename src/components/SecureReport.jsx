import React, { Component } from 'react'
import Report from './Report'
import {verify} from './helper'

export default class SecureReport extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status:0
        }
    }
    componentDidMount(){
        var roll=new URLSearchParams(window.location.search).get("roll");
        var pass=new URLSearchParams(window.location.search).get("pass");
        if(verify(this.state.mode,roll,pass)){
            this.setState({roll,status:this.state.mode,pass});
        }else{
            this.setState({status:99});
        }
    }
    
    render() {
        const {status}=this.state;
        if(status===0) return <h1>Loading</h1>
        else if(status===1)
            return (
                <Report roll={this.state.roll}/>
            )
        else if(status===2)
            return (
                <div>
                    <Report roll={this.state.roll}/>
                </div>
            )
        else return <h1>Error In Fetching Details QRcode Not matched with database</h1>
    }
}
