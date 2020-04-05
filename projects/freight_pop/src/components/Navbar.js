import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Shipments from './Shipments';
import Quotes from './Quotes';

class Navbar extends Component {
   render() {
      return (
         <Router>
            <div>
               <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                  <Link className="navbar-brand" to={'/'}>Home</Link>
                  <Link className="navbar-brand" to={'/Login'}>Login</Link>
                  <Link className="navbar-brand" to={'/Shipments'}>Shipments</Link>
                  <Link className="navbar-brand" to={'/Quotes'}>Quotes</Link>
               </nav>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Shipments' component={Shipments} />
                  <Route exact path='/Quotes' component={Quotes} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default Navbar;
