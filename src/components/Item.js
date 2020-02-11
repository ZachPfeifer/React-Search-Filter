import React from 'react'

export default function Item(props) {
  return (
    <div style={{ width: 200, border: 'solid' }}>
      <p>Name: {props.name}</p>
      <p>Id: {props.id}</p>
      <p>Tradeable:{props.tradeable}</p>
      <p>Member's Item: {props.members}</p>
      <p>Value: {props.value} GP</p>

    </div>
  )
}
