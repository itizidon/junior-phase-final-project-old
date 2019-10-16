import axios from 'axios'

const ALLSTUDENTS = 'ALL_STUDENTS'

const allStudents = (something)=>{
  return {
    type: ALLSTUDENTS,
    something
  }
}

export const allStudentsDispatch = ()=>{
  return async (dispatch)=>{
    const {data} = await axios.get('/api/students')
    dispatch(allStudents(data))
  }
}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ALLSTUDENTS:{
      return [...state, action.something]
    }
    default:
      return state
  }
}

// const lol = combineReducers({
//   rootReducer
// })
export default rootReducer
