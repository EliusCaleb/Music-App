
import './App.css';
import {Home} from "./router"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home/>
      <h1 className='text-primary'>Hello</h1>
       
    </div>
  );
}

export default App;
