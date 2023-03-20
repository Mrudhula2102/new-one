import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Newone = () => {
    var [fName,setName]= useState("")

    const changeName = (event) => {
     const {name,value} = event.target;
     setName(value);
    }
    useEffect(()=>{
        setName('[Enter Name]')
    },{})
  return (
    <div align='center'>
      <Typography variant='h2'>My Name is {fName}</Typography><br></br>
      <TextField variant='outlined' label='Enter Name' onChange={(e)=>changeName(e)}></TextField>
      
    </div>
  )

  }

export default Newone
