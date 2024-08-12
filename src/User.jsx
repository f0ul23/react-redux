import React from 'react'

export default function User(props) {
    const {data} = props
    return (
    <div>
      <h1>User Component</h1>
      <h2>{data.age}</h2>
    </div>
  )
}
