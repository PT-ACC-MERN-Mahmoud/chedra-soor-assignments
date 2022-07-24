import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Product from './components/Product';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products/edit/:id' element={<EditProduct />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;