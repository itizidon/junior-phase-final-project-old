import React, { Component } from "react";
import {connect} from 'react-redux'
import { single } from "../reducers/Campusreducer";

const mapStateToProps = (state) =>{
  return {
    name: state.name,
    imageUrl: state.imageUrl
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (name) => dispatch(single(name))
})


class Campus extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };

  }

  render() {
    return (
      <div className="campuses">

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
