// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';

import Cart from './component/Cart';
import MainPage from './component/MainPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <main>
        <Routes path="/">
          <Route index element={<MainPage/>}/>
          {/* <Route path="Content2" element={<Content3 />} /> */}
          <Route path="ตระกร้าสินค้า" element={<Cart />} />
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
