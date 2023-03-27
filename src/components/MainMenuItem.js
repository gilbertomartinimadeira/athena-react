import React from 'react';

export default function MainMenuItem(props) {
    
    const newTitle = props.title[0].toUpperCase() + props.title.slice(1, props.title.length);
    
    return(
    <div className="main-menu-item" onClick={props.onClick}>    
        <img className="main-menu-item--icon" src={props.icon} alt="item"></img>
        <p className="main-menu-item--title">{newTitle}</p>  
    </div>);
}