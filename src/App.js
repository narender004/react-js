import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
class Helloworld extends Component {

  customstyle =
  {
  backgroundColor:'lightblue',
  textDecoration : 'underline'
  }

 render()
 {
   return (<a href={this.props.link} style={this.customstyle}>{this.props.linktext}</a>)
 }
}

export default Helloworld;
