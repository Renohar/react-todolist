import React from 'react'
import LineItem from "./LineItem"


const ItemsList = ({items,handleClick,handleDelete}) => {
    return (
        <div className="ItemsList">
            <ul class="">
            {items.map((item) => (
                <LineItem
                item = {item}
                keys = {item.id}
                handleClick = {handleClick}
                handleDelete = {handleDelete}
                />
              
            ))}
          </ul>
        </div>
    )
}

export default ItemsList
