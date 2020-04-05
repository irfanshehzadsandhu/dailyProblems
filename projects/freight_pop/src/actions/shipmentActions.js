import axios from "axios";
import cookie from 'react-cookies'
export function fetch_shipment(start_date,end_date){
  return function(dispatch){
        var access_token = cookie.load('access_token');
        var user_id = cookie.load('user_id');
        access_token = 'bearer '+access_token;
        var instance = axios.create();
        var url = 'https://app.freightpop.com:8443/Ship/GetHistory?userID='+user_id+'&fromDate='+start_date+'&toDate='+end_date;
        instance.defaults.headers.common['Authorization'] = access_token
        instance.get(url)
        .then((response) =>{
          //console.log(response)
          dispatch({type:'FETCHED_SUCCESSFULL', payload:response.data});
        })
        .catch((err) => {
          console.log(err.response.statusText);
          dispatch({type:'FETCHED_FAILED',payload:err.response.statusText})
        })
  }
}
