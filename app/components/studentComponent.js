import React, { Component } from "react";
import {connect} from 'react-redux'
import { allStudentsDispatch } from "../reducers/Studentsreducer";
import {Link} from 'react-router-dom'
import AddStudentForm from './addStudent'
// import axios from 'axios'
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
    this.state={
      add: false
    }
    this.addStudent=this.addStudent.bind(this)
  }
  async componentDidMount() {
    // const res = await axios.get('/api/students');
    // console.log(res.data)

    this.props.allStudentDispatch()
  }

  addStudent(){
    this.setState({
      add: true
    })
  }

  render() {
    if(this.props.state.Studentreducer[0]===undefined){
      return(
        <div className="campuses">
        </div>
      )
    }
    else{
    return (
      <div className="campuses">
        <button onClick={this.addStudent}>add</button>
        {this.state.add ?
        <AddStudentForm/>
        :null}
        {this.props.state.Studentreducer[0].map(cur=>{
          return (<div key={cur.id}>
            <Link to={`/students/${cur.id}`}>{cur.firstName}{cur.lastName}</Link>
                  </div>)
        })}
      </div>
      )
  }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Student)
