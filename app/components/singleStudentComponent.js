import React, { Component } from "react";
import {connect} from 'react-redux'
import { singleStudentDispatch } from "../reducers/Studentsreducer";
// import axios from 'axios'
// import store from "../store";

// const SINGLECAMPUS = 'SINGLE_CAMPUS'

const mapStateToProps = (state) =>{
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  singleStudent: (id) => dispatch(singleStudentDispatch(id))
})

class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // const { data } = await axios.get(`/api/students/${this.props.match.params.id}`);
    // console.log(data)
    this.props.singleStudent(this.props.match.params.id)
  }

  render() {
    if(this.props.state.Studentreducer[0]===undefined){
      return(
        <div></div>
      )
    }
    else{
    return (
      <div>
        {this.props.state.Studentreducer[0].firstName}
        {this.props.state.Studentreducer[0].lastName}
        <p>{this.props.state.Studentreducer[0].email}</p>
        <img src={this.props.state.Studentreducer[0].imageUrl}/>
        <p>{this.props.state.Studentreducer[0].gpa}</p>
        </div>

    )
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
