import './App.css';
import VerticalMenu from './components/verticalMenu';
import Home from './home/index.js';

function App() {
  return (
    <div className="App">
      <VerticalMenu/>
      <div className='screens'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
