import React from 'react'

export default function Item(props) {
  return (
    <div style={{ width: 200, border: 'solid' }}>
      <p className="font-weight-bold">Id: {props.id}</p>
      <p className="font-weight-bold">Name: "{props.name}"</p>
      <p className="font-weight-bold">Stackable: {props.stackable}</p>
      <p>Member's Item: {props.members}</p>
      <p className="font-weight-bold">Noted: {props.noted}</p>
      <p>Tradeable: {props.tradeable}</p>
      <p>NoteId: {props.noteId}</p>
      <p>Value: {props.value} GP</p>

    </div>
  )
}
  // "id": "0",
  //   "name": "Dwarf remains",
  //     "stackable": "false",
  //       "members": "true",
  //         "noted": "false",
  //           "tradeable": "false",
  //             "noteId": "-1",
  //               "value": "0"
