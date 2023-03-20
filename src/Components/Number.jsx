import React from 'react'

const Number = () => {
    var x=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      {x.map((value,index)=>{
        return <li key={index}>{value}</li>
      })}
    </div>
  )
}

export default Number
