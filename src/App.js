import { useEffect,useState } from 'react';
import './App.css';
import Modal from './components/modal';
import VerticalMenu from './components/verticalMenu';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Setting from './Setting';

function App() {
  let [tab,setTab]=useState("Home");
  let [modal,setModal]=useState({close:true,component:<></>}) 
  const [user,setUser]=useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    console.log(localStorage.getItem("token"));
    try{
      setUser(JSON.parse(loggedInUser));
    }catch(e){
      setUser(null);
    }
  }, []);

  return (
    <div className="App">
      <Modal modal={modal} setModal={setModal}/>
      <VerticalMenu setTab={setTab} tabSelected={tab} user={user}/>
      <div className='screens'>
        {
          tab === "Search"  ?
            <Search setModal={setModal}/>  :
          tab === "Setting" ?
            <Setting user={user} setModal={setModal}/> :
          tab === "Profile" ?
            <Profile user={user} setModal={setModal}/> :
            <Home user={user} setModal={setModal}/>
        }
      </div>
    </div>
  );
}

export default App;
