import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

export default class Scan extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      scanned: false,
      result: "Scan The qr code",
    }

    this.handleScan = this.handleScan.bind(this)
  }
  convertTo10(str){
        var ans=0;
        for(var i=0;i<str.length;i++){
            ans=ans*9+(str[i]-'0');    
        }
        return ans;
  }
  decodeQR=data=>{
        const nums = data.split(9);
        var ans="";
        for(var i=0;i<nums.length;i++){
            ans+=(i%2?"1":"0").repeat(this.convertTo10(nums[i]));    
        }
        console.log(ans);
        var c = document.getElementById("myCanvas");
        console.log(c);
        var ctx = c.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 200, 240);
        ctx.fillStyle = "black";
        for(i=0;i<120;i++){
            for(var j=0;j<100;j++){
                if(ans[i*100+j]==="0"){
                    ctx.fillRect(2*j,2*i,2,2);
                }
            }
        }
        console.log(nums);
        return nums;
  }
  handleScan(data){
    if(data!==null){
        this.setState({
            scanned: true,
            result: this.decodeQR(data.text),
        })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        <canvas id="myCanvas" width="200" height="240" color="blue" style={{border:"5px blue solid"}} ></canvas>
      </div>
    )
  }
}