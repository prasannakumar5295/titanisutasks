// import React, { useState, useEffect, useRef } from 'react';
// import Logo from './logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import '../src/css/App.css';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prevState) => !prevState);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       closeDropdown();
//     }
//   };

//   useEffect(() => {
//     // Add the event listener when the component mounts
//     window.addEventListener('click', handleClickOutside);

//     // Remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="header">
//       <img src={Logo} className="img" alt="logo" />
//       <div className="profile-icon" onClick={toggleDropdown}>
//         <FontAwesomeIcon icon={faUser} />
//       </div>
      
//         <div className="dropdown" >
//           <a href="/profile">Profile</a>
//           <a href="/settings">Settings</a>
//           <a href="/logout">Logout</a>
//         </div>
      
//     </div>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import '../src/css/App.css';
import Logo from './logo.png';
import icon from './image-icon.jpg'
const App = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic here
    alert('Logout clicked');
  };

  return (
    <header className="header">
      <img src={Logo} className="img" alt="logo" />
      <div className='pf'>
      <div className="profile" onClick={toggleDropdown}>
      
        <img src={icon} alt="Profile Icon" className="profile-icon" />
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#" onClick={handleLogout}>Logout</a>
          </div>
        )}
      </div>
      </div>
    </header>
  );
};

export default App;

