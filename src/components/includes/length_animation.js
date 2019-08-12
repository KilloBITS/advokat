import React from 'react';
let startNum = {};
let createNumber = (num, sym, id, speed) => {
  if(startNum[id] !== parseInt(num) && ( startNum[id] <= 0 || startNum[id] === undefined )){
    startNum[id] = 0;
    let interval = setInterval(()=>{
        if(startNum[id] < parseInt(num)){
          startNum[id] = startNum[id]+1
          document.getElementById(id).innerHTML = startNum[id] + sym;
        }else{
          clearInterval(interval);
          return 0
        }
      }, parseInt(speed));
  }
}

let startInterval = (num, sym, id, speed, top) => {
  console.log(top)
  if(parseInt(top) > 1000 && (startNum[id] === 0 || startNum[id] === undefined) ){
    createNumber(num, sym, id, speed)
  }
}

class Length extends React.Component {
  render() {
    return <div id={this.props.id}>
    {startInterval(this.props.number, this.props.symbol, this.props.id, this.props.speed, this.props.scrollTop)}
    </div>
  }
}

export default Length;
