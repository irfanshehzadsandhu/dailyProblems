import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';
import {login} from "../actions/loginActions.js"
import store from "../store"
import cookie from 'react-cookies'


class Login extends Component {

   componentWillUpdate () {
     console.log(this.props.login.is_login);
     if (this.props.login.is_login){
       var user_state = JSON.parse(this.props.login.user_state.UserState);
       console.log(user_state.CompanyId);
       cookie.save('company_id',user_state.CompanyId);
       cookie.save('user_id',user_state.UserId);
       cookie.save('access_token',this.props.login.user_state.access_token);
       this.props.history.push("/Shipments");
     }
   }
   submitLoginForm(username,password){
        store.dispatch(login(username,password));
   }
   render() {
      let usernameInput;
      let passwordInput;
      return (
         <div>
            <main role="main">
              <div className="jumbotron">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Login Form</h2>
                      <form onSubmit={e => {
                         e.preventDefault();
                         var username = usernameInput.value;
                         var password = passwordInput.value;
                         this.submitLoginForm(username,password);
                       }}>
                        <div className="form-group">
                          <label>User Name</label>
                          <input className="form-control" placeholder="Enter username" type="text" ref={node => usernameInput = node}/>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input className="form-control" placeholder="Enter password" type="password" ref={node => passwordInput = node}/>
                        </div>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </main>
         </div>
      );
   }
}
// Maps state from store to props
const mapStateToProps = (state) => {
  return {
    login: (state.login)
  }
}
export default connect(mapStateToProps)(Login);
