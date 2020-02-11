import React from 'react'
import Item from './Item'

export default function ItemList(props) {
  let items = props.filterItems.map((item, i) => {
    return <Item
      key={i}
      id={item.id}
      name={item.name}
      stackable={item.stackable}
      members={props.members}
      noted={item.noted}
      tradeable={props.tradeable}
      noteId={props.noteId}
      value={props.value} />
  })

  return (
    <div>
      {items}
    </div>
  )

  // "id": "0",
  //   "name": "Dwarf remains",
  //     "stackable": "false",
  //       "members": "true",
  //         "noted": "false",
  //           "tradeable": "false",
  //             "noteId": "-1",
  //               "value": "0"
}
