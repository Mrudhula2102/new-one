import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Onefunction = () => {
    var[inputname,setinputname]=useState({
        fname:"",
        lname:""   
    })
       const inputHandler = (e) => {
        const {name,value}=e.target
         setinputname({...inputname,[name]:value})
       }
        return (
    <div>
      <Typography>First Name is{inputname.fname}</Typography>
      <TextField variant='outlined' label='first name' name='fname' value={inputname.fname} onChange={inputHandler} ></TextField><br></br>
      <Typography>second name is{inputname.lname}</Typography><br></br>
      <TextField label="second name" name="lname" value={inputname.lname} onChange={inputHandler}></TextField>
    </div>
  )
  }

export default Onefunction
