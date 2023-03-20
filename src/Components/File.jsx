import { Typography } from '@mui/material'
import React from 'react'

const File = () => {
    var x="react"
  return (
    <div>
      {x.map((value,index)=>{
        return <li key={index}>{value}</li>
      })}
    </div>
  )
}

export default File  