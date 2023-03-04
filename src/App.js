import { useState } from 'react';
import './App.css';
import Modal from './components/modal';
import VerticalMenu from './components/verticalMenu';
import Home from './home/index.js';
import Profile from './Profile';
import Search from './Search';
import Setting from './Setting';

function App() {
  let [tab,setTab]=useState("Home");
  let [modal,setModal]=useState({close:true,component:<></>}) 
  return (
    <div className="App">
      <Modal modal={modal} setModal={setModal}/>
      <VerticalMenu setTab={setTab} tabSelected={tab}/>
      <div className='screens'>
        {
          tab === "Search"  ?
            <Search/>  :
          tab === "Setting" ?
            <Setting/> :
          tab === "Profile" ?
            <Profile setModal={setModal}/> :
            <Home setModal={setModal}/>
        }
      </div>
    </div>
  );
}

export default App;
