import React, { Component } from "react";
import {connect} from 'react-redux'
import { lol } from "../reducers/Campusreducer";
// import axios from 'axios'
// import store from "../store";

// const SINGLECAMPUS = 'SINGLE_CAMPUS'

const mapStateToProps = (state) =>{
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  single: () => dispatch(lol())
})

class Campus extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // const res = await axios.get('/api/students');
    // console.log(res.data)

    this.props.single()

    // console.log(this.props.state)
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
        {this.props.state.Campusreducer[0].map(cur=>{
          return (<div key={cur.id}>
          <p>{cur.name}</p>
          <img src={cur.imageUrl}/>
                  </div>)
        })}
      </div>
    );
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)
