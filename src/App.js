import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes path="/">
            <Route index element={<MainPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
