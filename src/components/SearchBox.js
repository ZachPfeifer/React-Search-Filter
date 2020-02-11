import React from 'react'

export default function SearchBox(props) {
  return (
    <div>
      <label htmlFor="SearchBar">
        Search Bar:
        <input onChange={props.handleInput} type="text" name="" id="" />
      </label>
    </div>
  )
}
