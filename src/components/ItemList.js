import React from 'react'
import Item from './Item'

export default function ItemList(props) {
  let items = props.filterItems.map((item, i) => {
    return <Item key={i} name={item.name} id={item.id} tradeable={props.tradeable} members={props.members} value={props.value} />
  })

  return (
    <div>
      {items}
    </div>
  )
}
