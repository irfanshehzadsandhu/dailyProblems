export default function reducer(state={
  user_state: {},
  is_login: false,
  error: null
}, action){
  switch (action.type) {
    case "LOGIN_SUCCESSFULL":{
      return {
              ...state,
              user_state: action.payload,
              is_login: true,
              error: null
            }
    }
    case "LOGIN_FAILED":{
      return {
                ...state,
                is_login: false,
                error: action.payload
              }
    }
  }
  return state;
}
