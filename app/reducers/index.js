import Campusreducer from './Campusreducer'
import Studentreducer from './Studentsreducer'
import { combineReducers } from 'redux'

const combinedReducers = combineReducers({Studentreducer,Campusreducer})

export default combinedReducers
