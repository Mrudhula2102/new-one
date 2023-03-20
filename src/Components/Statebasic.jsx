import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname] = useState('Mrudhula')
    const changeName=()=>{
          setfname('Muhsina')
    }
  return (
    <div>
      <Typography>Welcome {fname}</Typography>
      <br>
      </br>
      <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasic
