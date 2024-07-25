// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content1 from './component/Content1';
import Content2 from './component/Content2';
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes path="/">
          <Route index element={<><Content1 /></>} />
          <Route path="Content2" element={<Content2 />} />
          <Route path="ตระกร้าสินค้า" element={<Cart />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
