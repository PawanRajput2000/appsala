
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './component/Login';
import SignUP from './component/SignUP';

import Addcompany from './component/Addcompany';
import  Component  from './component/Component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUP />} />
          <Route path="login" element={<Login />} />
          <Route path="addcompany" element={<Addcompany />} />
          {/* <Route path="component" element={<Component/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
