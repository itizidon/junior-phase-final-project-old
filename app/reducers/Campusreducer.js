import axios from "axios"

const SINGLECAMPUS = 'SINGLE_CAMPUS'
const ALLCAMPUSES = 'ALL_CAMPUSES'

const all = (campuses)=>{
  return{
    type: ALLCAMPUSES,
    campuses
  }
}

const single = (campus)=>{
  return {
    type: SINGLECAMPUS,
    campus
  }
}

export const lol=()=>{
  return async (dispatch)=>{
    const {data} = await axios.get('/api/campuses')
    dispatch(single(data))
  }
}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case SINGLECAMPUS:{
      return [...state, action.campus]
    }
    default:
      return state
  }
}

export default rootReducer
