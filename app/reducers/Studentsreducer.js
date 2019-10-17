import axios from 'axios'

const SINGLESTUDENT = 'SINGLE_STUDENT'
const ALLSTUDENTS = 'ALL_STUDENTS'
const ADDSTUDENT = 'ADD_STUDENT'

const allStudents = (something)=>{
  return {
    type: ALLSTUDENTS,
    something
  }
}

const addStudent = (student)=>{
  return{
    type: ADDSTUDENT,
    student
  }
}

const singleStudent = (student)=>{
  return{
    type: SINGLESTUDENT,
    student
  }
}

export const addStudents = (newStudent)=>{
  return async (dispatch)=>{
    const {data} = await axios.get('/api/students', newStudent)
    dispatch(addStudent(data))
  }
}

export const singleStudentDispatch = (id)=>{
  return async (dispatch)=>{
    const {data} = await axios.get(`/api/students/${id}`)
    dispatch(singleStudent(data))
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
    case SINGLESTUDENT:{
      return [...state, action.student]
    }
    default:
      return state
  }
}

// const lol = combineReducers({
//   rootReducer
// })
export default rootReducer
