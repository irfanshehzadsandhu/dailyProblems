import axios from "axios";
import cookie from 'react-cookies'
export function fetch_quotes(){
  return function(dispatch){
        var access_token = cookie.load('access_token');
        access_token = 'bearer '+access_token;
        var user_id = cookie.load('user_id');
        var company_id = cookie.load('company_id');
        //var querystring = require('querystring');
        var instance = axios.create();
        instance.defaults.headers.common['Authorization'] = access_token
        var params = new URLSearchParams();
        params.append('UserID', user_id);
        params.append('CompanyID', company_id);
        instance.post('https://app.freightpop.com:8443/Quote/Index',params)
        .then((response) =>{
          console.log(response.data)
          dispatch({type:'QUOTE_FETCHED_SUCCESSFULL', payload:response.data});
        })
        .catch((err) => {
          console.log(err.response);
          console.log(err.response.statusText);
          dispatch({type:'QUOTE_FETCHED_FAILED',payload:err.response.statusText})
        })
  }
}
