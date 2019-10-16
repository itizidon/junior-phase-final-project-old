import React from 'react'
import Campus from './campusComponent'
import Student from './studentComponent'
import {HashRouter,Route,Link} from 'react-router-dom'
// import axios from 'axios';

const Root = () => {

  return (
    <HashRouter>
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
      <div className='components'>
      </div>

        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Link to='/campuses'>campuses</Link>
        <Link to='/students'>students</Link>
        <Route path='/campuses' component={Campus}></Route>
        <Route path='/students' component={Student}></Route>
        <p>This seems like a nice place to get started with some Routes!</p>
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
