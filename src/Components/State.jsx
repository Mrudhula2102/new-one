import { Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[page,setpage]=useState("Home page")
    const Homepage = () =>{
        setpage("Home page")
    }
    var[page,setpage]=useState('Gallery page')
    const Gallerypage = () => {
        setpage("Gallery page")
    }
    var[page,setpage]=useState('Contact page')
    const Contactpage = () => {
        setpage("Contact page")
    }
  return (
    <div align='center'>
        <Typography variant='h3'>Welcome to {page}</Typography>
      <Button variant='contained' color='primary' onClick={Homepage}>Home page</Button>
      <Button variant='contained' color='secondary' onClick={Gallerypage}>Gallery page</Button>
      <Button variant='contained' color='success' onClick={Contactpage}>Contact page</Button>
    </div>
  )
}

export default State
