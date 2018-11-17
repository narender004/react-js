import React,{Component} from 'react';

class Forms extends Component
{
    constructor(props)
    {
     super(props);

     this.state = {
       
        username :'',
        allusers :[],
        checkboxGroup:{
            mongodb:false,
            express:false,
            react:true,
            node:false,
         },
        selectvalue:'node'

     }
    this.onchangehandler = this.onchangehandler.bind(this);
    this.clickhandler = this.clickhandler.bind(this);
    this.CheckboxHandler = this.CheckboxHandler.bind(this);
     this.selectHandler = this.selectHandler.bind(this);
     this.refSubmitHander  = this.refSubmitHander.bind(this);
 }
   onchangehandler(e)
    {
       var uname=e.target.value;

       this.setState({
           username:uname
       })
 
    }
    clickhandler(e)
    {
        let currentuser = this.state.allusers;
        currentuser.push(this.state.username);
        this.setState({

            allusers:currentuser,
            username :'',
            
        })
       console.log('all users',this.state.allusers);
    }

   setGender(event) {
    console.log(event.target.value);
  }
   CheckboxHandler(event)
   {
   //console.log(event.target.value);
   let checkbox = this.state.checkboxGroup;
   checkbox[event.target.value] = event.target.checked;

   this.setState({
      checkboxGroup:checkbox
   })
   }
  selectHandler(event)
  {
      this.setState({
     selectvalue:event.target.value
      })
  }
   refSubmitHander(event)
   {
  console.log(this.refs.refservericeemail.value);
   }
    render()
    {
        return(

            <div>
            <h1> Forms </h1>
            {/* <input type="text" name="username" value={this.state.username} onChange={this.onchangehandler} />
             <div onChange={this.setGender.bind(this)}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
      <br/>
      Technologies:-
      <br/>
      <label>
          mongodb <input type="checkbox" name="tech" value="mongodb" checked={this.state.checkboxGroup['mongodb']} onChange={this.CheckboxHandler} />
          </label>
          <br/>
      <label>
          express <input type="checkbox" name="tech" value="express"   checked={this.state.checkboxGroup['express']} onChange={this.CheckboxHandler} />
          </label>
          <br/>
      <label>
          react <input type="checkbox" name="tech" value="react"  checked={this.state.checkboxGroup['react']} onChange={this.CheckboxHandler} />
          </label>
          <br/>
      <label>
          node <input type="checkbox" name="tech" value="node"  checked={this.state.checkboxGroup['node']} onChange={this.CheckboxHandler} />
          </label>
          <br/>
          <select value={this.state.selectvalue} onChange={this.selectHandler} >
         <option value="ruby">ruby </option>
          <option value="react">react</option>
           <option value="node">node</option>
         </select>
            <button onClick={this.clickhandler}>submit</button> */}
            {/* <p>{this.state.username}</p>  */}

            Email :- <input type="email" ref="refservericeemail" />
            <br/>
            <button onClick={this.refSubmitHander}>save </button>
            </div>
        )
    }
}
export default Forms;