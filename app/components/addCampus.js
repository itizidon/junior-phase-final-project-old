import React from 'react'

const AddCampusForm = (props)=>{
  return(
  <form>
  <label>
    Name:
    <input type={"text"}/>
  </label>
  <label>
    Address:
    <input type={"text"}/>
  </label>
  <input type='submit' value='add' />
</form>
  )
}

export default AddCampusForm
