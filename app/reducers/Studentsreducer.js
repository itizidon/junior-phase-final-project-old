const SINGLESTUDENT = 'SINGLE_STUDENT'

export const single = (something)=>{
  return {
    type: SINGLESTUDENT,
    something
  }
}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case SINGLESTUDENT:{
      return state
    }
    default:
      return state
  }
}

// const lol = combineReducers({
//   rootReducer
// })
export default rootReducer
