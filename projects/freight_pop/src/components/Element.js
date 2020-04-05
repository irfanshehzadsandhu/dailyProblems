import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Button } from 'reactstrap';

export default class Element extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
          <h2>{this.props.text.QuoteID}</h2>
      </div>
    );
  }
}
