import React, { Component } from "react";
import {connect} from 'react-redux'
import { allCampuses } from "../reducers/Campusreducer";
import {Link} from 'react-router-dom'
import AddCampusForm from './addCampus'
// import axios from 'axios'
// import store from "../store";

// const SINGLECAMPUS = 'SINGLE_CAMPUS'

const mapStateToProps = (state) =>{
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  allCampuses: () => dispatch(allCampuses())
})

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state={
      add: false
    }
    this.addCampus=this.addCampus.bind(this)
  }
  async componentDidMount() {
    // const res = await axios.get('/api/students');
    // console.log(res.data)
    this.props.allCampuses()
    // console.log(this.props.state)
  }
addCampus(){
  this.setState({
    add: true
  })
}

  // componentDidMount(){
  //   this.props.single
  // }
  render() {
    if(this.props.state.Campusreducer[0]===undefined){
      return(
        <div className="campuses">
        </div>
      )
    }
    else{
    return (
      <div className="campuses">
        <button onClick={this.addCampus}>Add School</button>
        {this.state.add ?
        <div>
        <AddCampusForm /></div>
        :null}
        {this.props.state.Campusreducer[0].map(cur=>{
          return (<div key={cur.id}>
          <Link to={`/campuses/${cur.id}`}>{cur.name}</Link>
          <img src={cur.imageUrl}/>
          </div>)
        }
        )}
      </div>
    );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)
