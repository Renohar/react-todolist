import React from 'react'
import ItemsList from "./ItemsList"


const Content = ({items,handleDelete,handleClick}) => {

    return (
        <div className="content">
          {
            (items.length) ? <ItemsList
            items = {items}
            handleClick = {handleClick}
            handleDelete = {handleDelete}
            /> : <p>Your List is Empty</p>
          }
        </div>
      );
    };

export default Content
