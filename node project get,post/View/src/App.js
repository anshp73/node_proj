import React,{ useState } from 'react'
import Axios from 'axios'
import './App.css'

const dbUrl = "http://localhost:7000/book"

const App = () => {

  const [sname,setsname] = useState("")
  const [section,setsection] = useState("")
  const [cgpa,setcgpa] = useState(0)
  
  const handleSubmit = () => {
    Axios.post(dbUrl, {
      Name : sname,
      Section : section,
      Cgpa: cgpa
    }).then( () => alert("Successfully logged!"))
  } 

  return (
    <div className='App'>
      <h1><b> CRUD Application </b></h1>
      <div className='details'>
        <label id='field'> Title of the Book </label>
        <input type='text' name='sname' onChange={ (e) => setsname(e.target.value)} required/>
        <label id='field'> Name of the Author </label>
        <input type='text' name='section' onChange={ (e) => setsection(e.target.value)} required/>
        <label id='field'> Price </label>
        <input type='number' name='cgpa' onChange={ (e) => setcgpa(e.target.value)} required />
        <button onClick={ handleSubmit }> SUBMIT </button>
      </div>
    </div>
  )
}

export default App
