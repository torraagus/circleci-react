import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Link from './components/link/link.component';
import OuterCounter from './components/outer-counter/outer-counter.component';

class Root extends Component {
  render() {
    return (
      //<Link page="http://www.facebook.com">Go to Facebook</Link>
      <OuterCounter></OuterCounter>
    )
  }
}

let container = document.getElementById('app');
let component = <Root />;

ReactDOM.render(component, container);