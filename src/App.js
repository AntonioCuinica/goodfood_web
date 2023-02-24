import { useState } from 'react';
import './App.css';
import VerticalMenu from './components/verticalMenu';
import Home from './home/index.js';
import Profile from './Profile';
import Search from './Search';
import Setting from './Setting';

function App() {
  let [tab,setTab]=useState("Home"); 
  return (
    <div className="App">
      <VerticalMenu setTab={setTab} tabSelected={tab}/>
      <div className='screens'>
        {
          tab === "Search" ?
            <Search/>  :
          tab === "Setting" ?
            <Setting/> :
          tab === "Profile" ?
            <Profile/> :
            <Home/>
        }
      </div>
    </div>
  );
}

export default App;
