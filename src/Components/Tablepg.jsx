import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablepg = () => {
  var i = [{ name: 'Mrudhula', age: 20, place: 'wayanad' },
  { name: 'Muhsina', age: 20, place: 'thriprayar' },
  { name: 'Udith', age: 20, place: 'nandhikara' }]
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Age</TableCell>
            <TableCell align='center'>Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {i.map((value, index) => {
            return <TableRow>
              <TableCell key={index} align='center'>{value.name}</TableCell>
              <TableCell key={index} align='center'>{value.age}</TableCell>
              <TableCell key={index} align='center'>{value.place}</TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default Tablepg
