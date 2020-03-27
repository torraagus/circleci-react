import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OuterCounter from './components/outer-counter/outer-counter.component';
import Click from './components/click/click';
import 'bootstrap/dist/css/bootstrap.min.css';

class Root extends Component {
  render() {
    return (
      <>
        <OuterCounter></OuterCounter>
        <Click name="gustavo"></Click>
      </>
    )
  }
}

let container = document.getElementById('app');
let component = <Root />;

ReactDOM.render(component, container);