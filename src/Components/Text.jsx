import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Text = () => {
    var [fName,setName]= useState("")

    const changeName = (event) => {
     const {name,value} = event.target;
     setName(value);
    }
    var [lName,settName]= useState("")

    const change = (even) => {
     const {name,value} = even.target;
     settName(value);
    }
    useEffect (()=>{
        setName('[Enter name]')
        settName('[Enter name]')
    },[])
  return (
    <div align='center'>
      <Typography variant='h4'>My Name first name is {fName}</Typography><br></br>
      <TextField variant='outlined' label='first Name' onChange={(event) => changeName(event)}></TextField><br></br>
      <Typography variant='h4'>My second name is {lName}</Typography>
      <TextField variant='outlined' label ='second name' onChange={(even)=>change(even)} ></TextField>
    </div>
  )
}

export default Text
