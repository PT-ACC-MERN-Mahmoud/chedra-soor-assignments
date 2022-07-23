import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;