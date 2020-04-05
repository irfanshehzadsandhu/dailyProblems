import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetch_quotes} from "../actions/quoteActions.js"
import store from "../store"
import Griddle from 'griddle-react';

class Quotes extends Component {
  componentWillMount(){
    console.log('Quotes Component')
    store.dispatch(fetch_quotes());
   }
   render() {
      return (
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <Griddle data={this.props.quotes} />
            </div>
          </div>
        </main>
      );
   }
}
const mapQuoteStateToProps = (state) => {
  console.log(state.quotes.data);

  return {
    quotes: (state.quotes.data)
  }
}
export default connect(mapQuoteStateToProps)(Quotes);
