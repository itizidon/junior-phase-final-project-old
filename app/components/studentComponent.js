import React, { Component } from "react";
import {connect} from 'react-redux'
import { allStudentsDispatch } from "../reducers/Studentsreducer";
import axios from 'axios'
// import store from "../store";

// const SINGLECAMPUS = 'SINGLE_CAMPUS'

const mapStateToProps = (state) =>{
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  allStudentDispatch: () => dispatch(allStudentsDispatch())
})

class Student extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // const res = await axios.get('/api/students');
    // console.log(res.data)

    this.props.allStudentDispatch()

    // console.log(this.props.state)
  }
  // componentDidMount(){
  //   this.props.single
  // }
  render() {
    console.log(this.props.state.Studentreducer[0])
    if(this.props.state.Studentreducer[0]===undefined){
      return(
        <div className="campuses">
        </div>
      )
    }
    else{
    return (
      <div className="campuses">
        {this.props.state.Studentreducer[0].map(cur=>{
          return (<div key={cur.id}>
                  <p>{cur.firstName}{cur.lastName}</p>
                  </div>)
        })}
      </div>
      )
  }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Student)
