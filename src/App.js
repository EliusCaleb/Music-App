
import './App.css';
import {Browser, Home, Layout} from "./router"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/browser'
          element={
            <Layout>
              <Browser />
            </Layout>
          }
        />
        </Routes>
      </Router>
      <Home/>
      <h1 className='text-primary'>Hello</h1>
       
    </div>
  );
}

export default App;
