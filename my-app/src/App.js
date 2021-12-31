import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Token from './Token';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/:token" element={<Token/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
