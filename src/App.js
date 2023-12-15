import './css/App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './tasks/Sidebar';
import Todolist from './tasks/Todolist';
import Header from './Header';
import Jsondata from './tasks/Jsondata';
import BMICalculator from './tasks/Bmicalculator';
import TableData from './tasks/Tabledata';
import Userdata from './json files/users'

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
            <Route path="/Todo" element={<Todolist />} />
            <Route path="/Jsondata" element={<Jsondata/>} />
            <Route path="/Bmicalculator" element={<BMICalculator />} />
            <Route path="/TableData" element={<TableData users={Userdata}/>} />

          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
