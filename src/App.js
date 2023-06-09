import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:id" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
        <Route path="/*" element={ <h4>Ruta no Encontrada</h4> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;