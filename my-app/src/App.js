import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Game from './Game';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/:token" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
