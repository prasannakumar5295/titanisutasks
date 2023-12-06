// src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

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
                        <Link to="/task1">
                            <span>Task1</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/task2">
                            <span>Task2</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/task3">
                            <span>Task3</span>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
