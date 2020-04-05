import axios from "axios";
export function login(username,password){
  return function(dispatch){
    var querystring = require('querystring');
    axios.post('https://app.freightpop.com:8443/token', querystring.stringify({ UserName: username,Password: password,grant_type: 'password' }))
        .then((response) =>{
          dispatch({type:'LOGIN_SUCCESSFULL', payload:response.data});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type:'LOGIN_FAILED',payload:err.response.statusText})
        })
  }
}
