// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content1 from './component/Content1';
import Content2 from './component/Content2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes path="/">
          <Route index element={<><Content1 /><Content1 /></>} />
          <Route path="Content2" element={<Content2 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
