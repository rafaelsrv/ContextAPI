
import './App.css'
import { Outlet } from 'react-router-dom'

import Navbar from './component/Navbar'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App
