import React from 'react'

const Footer = ({length}) => {

    const setDate = new Date();
    return (
        <div className="Footer">
            {
                (length) ?
                <p>{length} List {length === 1 ? "Item" :"Items"} on <span>{setDate.getDate()} - {setDate.getMonth()} - {setDate.getFullYear()} </span> </p> : <p>{setDate.getDate()} - {setDate.getMonth()} - {setDate.getFullYear()} </p>

            }
            
        </div>
    )
}

export default Footer
