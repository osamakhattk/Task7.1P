import React from 'react';
import './App.css';
import HomePage from './routes/HomePage';
import Login from './Login';
import {Routes, Route} from 'react-router-dom'
import Signup from './Signup';

function App() {
  return(
    <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}
export default App;
