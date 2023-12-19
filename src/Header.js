import React from 'react';


const Header = ({title}) => {


    return (
        <div className="Header">
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Todo List"
}

export default Header
