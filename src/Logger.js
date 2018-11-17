import React,{Component} from 'react';

class Logger extends Component
{
    constructor(props) {
        super(props);
        console.log('constructor running');
    }
    componentWillMount()
    {
        console.log('componentwillmount running');
    }
    render()
    {
        console.log('render running');
        return(<h1>{this.props.time}</h1>)
    }
}

export default Logger;
