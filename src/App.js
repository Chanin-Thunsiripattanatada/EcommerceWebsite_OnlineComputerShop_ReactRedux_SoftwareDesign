// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content1 from './component/Content1';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Content1 />
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
