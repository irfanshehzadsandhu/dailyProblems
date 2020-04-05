export default function reducer(state={
  data: [],
  fetched: false,
  error: null
}, action){
  switch (action.type) {
    case "FETCHED_SUCCESSFULL":{
      return {
              ...state,
              data: action.payload,
              fetched: true,
              error: null
            }
    }
    case "FETCHED_FAILED":{
      return {
                ...state,
                fetched: false,
                error: action.payload
              }
    }
  }
  return state;
}
