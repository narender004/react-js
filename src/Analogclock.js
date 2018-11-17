import React from 'react'; //if we are using stateless component then we do not need to import component like this{component}

function AnalogClock(props)
{
//console.log(props.time);

return (<div>
<h1>Analog Clock</h1>
<div>{props.time}</div> 
</div>)
}
export default AnalogClock;
