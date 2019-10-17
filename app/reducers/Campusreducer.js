import axios from "axios"

const SINGLECAMPUS = 'SINGLE_CAMPUS'
const ALLCAMPUSES = 'ALL_CAMPUSES'
const ADDCAMPUSES = 'ADD_CAMPUSES'

const all = (campuses)=>{
  return{
    type: ALLCAMPUSES,
    campuses
  }
}

const addCampus = (newCampus)=>{
  return{
    type: ADDCAMPUSES,
    newCampus
  }
}

const single = (campus)=>{
  return {
    type: SINGLECAMPUS,
    campus
  }
}

export const addCampuses = (newCampus)=>{
  return async (dispatch)=>{
    const {data} = await axios.get('/api/campuses', newCampus)
    dispatch(addCampus(data))
  }
}

export const singleCampus = (id) =>{
  return async (dispatch)=>{
    const {data} = await axios.get(`/api/campuses/${id}`)
    dispatch(single(data))
  }
}

export const allCampuses=()=>{
  return async (dispatch)=>{
    const {data} = await axios.get('/api/campuses')
    dispatch(all(data))
  }
}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ALLCAMPUSES:{
      return [...state, action.campuses]
    }
    case SINGLECAMPUS:{
      return [...state,action.campus]
    }
    default:
      return state
  }
}

export default rootReducer
