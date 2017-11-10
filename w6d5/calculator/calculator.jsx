import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  // your code here

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
      </div>
    );
  }

  setNum1(e) {
    // your code here
  }

}

export default Calculator;
