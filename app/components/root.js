import React from 'react'
import Campus from './campusComponent'
import Student from './studentComponent'
import SingleStudent from './singleStudentComponent'
import {HashRouter,Route,Link} from 'react-router-dom'
import SingleCampus from './singleCampusComponent'
// import axios from 'axios';

const Root = () => {
  return (
    <HashRouter>
    <div>
      <nav>
        Welcome!
        <Link to='/campuses'>campuses</Link>
        <Link to='/students'>students</Link>
      </nav>
      <main>
      <div className='components'>
      </div>

        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>

        <Route exact path='/campuses' component={Campus}></Route>
        <Route exact path='/students' component={Student}></Route>
        <Route exact path='/campuses/:id' component={SingleCampus}></Route>
        <Route exact path='/students/:id' component={SingleStudent}></Route>
        <p>This seems like a nice place to get started with some Routes!</p>
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
