import React, { Component } from 'react';
// import DigitalClock from './Clock';

// import AnalogClock from './Analogclock';

 import Logger from './Logger';

class Clock extends Component
{
 
   constructor(props) {
   super(props);
     //  var number = new Date();
  // var time = number.toLocaleString();
   // console.log(time);
   this.state = {
   currentTime:new Date().toLocaleString(),
   counter :0
   }
   this.updatetime();
  }
 updatetime()
 {    

     setInterval(()=>{
      this.setState({
        currentTime:new Date().toLocaleString(),
        counter: this.state.counter + 1
      })
    }, 1000);
  }

  render()
  {
  return (
  //<h1>{this.state.currentTime}</h1>
  <div>
  {/* <DigitalClock time={this.state.currentTime} />
  <AnalogClock time={this.state.currentTime} /> */}
 
  {
     (this.state.counter < 2)?
     <Logger time={this.state.currentTime}/>:
     (<div></div>)
  }
 

  </div>
 
  )
  }
}

export default Clock;