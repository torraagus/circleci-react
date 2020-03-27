import React, { Component } from 'react';

/*export default function Click() {
    return (
        <button data-testid="btn" onClick={() => {}}>Presionar</button>
    )
}*/

export default class Click extends Component {
    constructor(props) {
      super(props);
      this.state = {
          btnName: "Presionar"
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name) {
      this.setState((state) => ({
          btnName: name
      }));
    }
    render() {
      //return <button onClick={this.handleClick}>Clickéame</button>;
      return <button type="button" data-testid="btn" onClick={() => this.handleClick(this.props.name)}><span data-testid="name">{this.state.btnName}</span></button>;
    }
}
  
