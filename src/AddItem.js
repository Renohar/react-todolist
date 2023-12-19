import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

    const inputRef = useRef()
    
    return (
        <div class="Addlist">
            <form className="addform" onSubmit = {handleSubmit}>

                <label htmlFor="addItem"></label>

                <input 
                value = {newItem}
                ref = {inputRef}
                onChange = {(e) => setNewItem(e.target.value)}
                autoFocus
                id="addItem"
                type="text"
                placeholder="Add Task"
                required
                />

                <button 
                onClick= {() =>inputRef.current.focus()}
                type="submit"
                aria-label="Add Item"> <FaPlus/></button>

            </form>
        </div>
    )
}

export default AddItem
