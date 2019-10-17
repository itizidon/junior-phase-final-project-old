import React from 'react'

const AddStudentForm=(props)=>{
  return(
        <form>
          <label>
            First Name:
            <input type='text'name='first name'/>
          </label>
          <label>
            Last Name:
            <input type='text'name='last name'/>
          </label>
          <label>
            email:
            <input type='email'name='email'/>
          </label>
          <input type='submit'/>
        </form>
      )
    }

export default AddStudentForm
