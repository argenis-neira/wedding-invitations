import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/index"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        {/* algo aqui como la barra de navegacion*/}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
