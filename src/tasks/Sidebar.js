// src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import '../css/Sidebar.css';
import '../css/App.css'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            {isOpen && (
                <ul>
                    <li className="link">
                        <Link to="/Todo">
                            <span style={{"color":"white"}}>Todo</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/Jsondata">
                            <span style={{"color":"white"}}>Jsondata</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/Bmicalculator">
                            <span style={{"color":"white"}}>Bmi Calculator</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/TableData">
                            <span style={{"color":"white"}}>Tabledata</span>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
