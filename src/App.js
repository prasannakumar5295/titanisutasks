import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Todolist from './Todolist';
import Header from './Header';
const Task2 = () => <h1 className="task">About Page</h1>;
const Task3 = () => <h1 className="task">Contact Page</h1>;

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Header />
          <Sidebar />
        </div>

        <div style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/Task1" element={<Todolist />} />
            <Route path="/Task2" element={<Task2 />} />
            <Route path="/Task3" element={<Task3 />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
