// DropdownMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const DropdownMenu = ({ isOpen, onClose, pianoFeature }) => {
    return (
        <div className={`dropdown ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
                <NavLink to='/songsheets'>Songsheets</NavLink>
                <NavLink to='/publish'>
                    <i className='fa fa-plus'></i>Publish
                </NavLink>
                <NavLink to='/setlists'>Setlists</NavLink>
                <p onClick={pianoFeature}>Piano</p>
        </div>
    );
};

export default DropdownMenu;
