import React, { Component } from "react";
import {connect} from 'react-redux'
import { singleCampus } from "../reducers/Campusreducer";
// import axios from 'axios'
// import store from "../store";

// const SINGLECAMPUS = 'SINGLE_CAMPUS'

const mapStateToProps = (state) =>{
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  singleCampus: (id) => dispatch(singleCampus(id))
})

class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // const { data } = await axios.get(`/api/students/${this.props.match.params.id}`);
    // console.log(data)
    this.props.singleCampus(this.props.match.params.id)
  }

  render() {
    if(this.props.state.Campusreducer[0]===undefined){
      return(
        <div></div>
      )
    }
    else{
    return (
      <div>
        <p>{this.props.state.Campusreducer[0].name}</p>
        <img src={this.props.state.Campusreducer[0].imageUrl} />
        <p>{this.props.state.Campusreducer[0].address}</p>
        <p>{this.props.state.Campusreducer[0].description}</p>
      </div>
    )
  }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
