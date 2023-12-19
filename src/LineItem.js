import React from 'react'
import { FaTrash } from "react-icons/fa";


const LineItem = ({keys,item,handleClick,handleDelete}) => {
    return (
        <div className="LineItem">
            <li className="item" key={keys}>

                <input 
                onChange={()=>handleClick(item.id)}
                type="checkbox" checked={item.checked} />

                <label
                style = { item.checked ? {textDecoration:'line-through'} : null}
                onDoubleClick={()=> handleClick(item.id)}>{item.item}</label>

                
                <FaTrash  aria-label={`Delete ${item.item}`} onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
                </li>
        </div>
    )
}

export default LineItem
