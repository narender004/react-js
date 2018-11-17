import React,{ Component } from 'react';

class Method extends Component
{
    mygooglelink()
    {
        return "https://www.google.co.in";
    }
    mylinkname()
    {
        return "Google";
    }
    render()
    {
    return (<div>
        <p> My Google id is :<a href={this.mygooglelink()}>{this.mylinkname()}</a></p>
    </div>)
    }
}

export default Method;