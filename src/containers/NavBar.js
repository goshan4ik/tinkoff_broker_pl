import React from "react";


const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#333333'
}

const liStyle  = {
    float: 'left'
}

const liAStyle = {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '16px',
    textDecoration: 'none'
}

const exitOptionStyle = {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '16px',
    marginLeft: '975px',
    textDecoration: 'none'
}

const NavBar = () => (
    <>
        <ul id="nav" style={ulStyle}>
            <li style={liStyle}><a style={liAStyle} href="/about">Мой портфель</a></li>
            <li style={liStyle}><a style={liAStyle} href="/dashboard">Статистика</a></li>
            <li style={liStyle}><a style={liAStyle} href="/home">Настройки</a></li>
            <li style={liStyle}><a style={exitOptionStyle} href="#">Выйти</a></li>
        </ul>
    </>
);

export default NavBar;