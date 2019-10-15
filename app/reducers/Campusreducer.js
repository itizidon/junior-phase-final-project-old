const SINGLECAMPUS = 'SINGLE_CAMPUS'

export const single = (something)=>{
  return {
    type: SINGLECAMPUS,
    something
  }
}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case SINGLECAMPUS:{
      return state
    }
    default:
      return state
  }
}

export default rootReducer
