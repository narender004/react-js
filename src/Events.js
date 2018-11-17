import React,{Component} from 'react';
import Counter from './Counter';
class MyEvents extends Component
{
    constructor(props)
    {
    super(props);
    this.state={

        counter:0
    }
    this.increment_counter = this.increment_counter.bind(this);
    this.decrement_counter = this.decrement_counter.bind(this);
    }
    // clickevent()
    // {
    //     console.log('click press');
    // }
    increment_counter()
    {
       //console.log('increment_counter');

     // console.log('ddd', e.target.increment_work);
      
    //   console.log(e.target.getAttribute("increment_work"));
    if(this.state.counter < 11)
    {
        this.setState({
            counter:this.state.counter + 1
        })
    }
    else
    {
    console.log('already reach maximam count');
    }
    }
    decrement_counter()
    {
        //console.log('decrement_counter');
    //    console.log(e.target.getAttribute("decrement_work"));
    if(this.state.counter === 0)
    {
    console.log('already reach minimum count');
    }
    else
    {
        this.setState({
            counter:this.state.counter - 1
        })
    }
     
     }
    render()
    {
        return(
            <div>
         {/* <h1>Event</h1>
        <button onClick={this.clickevent}>press here</button>
        <button onClick={this.increment_counter.bind(this,'helloworld')} increment_work="value increment">increment counter</button>
        <button onClick={this.decrement_counter}  decrement_work="value decrement">Decrement counter</button>
        <br />
        <span>{this.state.counter}</span> */}
     <Counter counter={this.state.counter} increment={this.increment_counter} decrement={this.decrement_counter}/>
            </div>
        
            
            )
        
    }
}

export default MyEvents;
