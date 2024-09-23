import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';

import ProductDetail from './components/Product/ProductDetail';

import AboutMePage from './components/AboutMePage/AboutMePage';
import CartTab from './components/CartPage/CartTab';
import CategoryView from './components/Category/CategoryView';
import Checkout from './components/CheckOut/Checkout';
import LoginPage from './components/User/LoginPage/LoginPage';
import RegisterPage from './components/User/LoginPage/RegisterPage';
import UserCustomerUpdatePage from './components/User/AccountPage/UserCustomerUpdate/UserCustomerUpdatePage';
import AccountInfo from './components/User/AccountPage/AccountInfo/AccountInfo';
import AccountSidebar from './components/User/Sidebar';
import OrderHistory from './components/User/AccountPage/OrderHistory/OrderHistory';
import FollowOrder from './components/User/AccountPage/FollowOrder/FollowOrder';
import ProtectedRoute from './auth/ProtectedRoute';
import WarrantyConditions from './components/WarrantyPage/WarrantyConditions';
import Services from './components/ServicePage/Services';
import ProductSearch from './components/Product/ProductSearch';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
        <Header />
        <main>
          <Routes path="/">
            <Route index element={<MainPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<ProductSearch />} />
            <Route path="/category/:categoryName" element={<CategoryView />} />
            <Route path="/ตระกร้าสินค้า" element={<CartTab />} />
            <Route path='/บริการ' element={<Services />} />
            <Route path='/เงื่อนไขการรับประกัน' element={<WarrantyConditions />} />
            <Route path='/เกี่ยวกับเรา' element={<AboutMePage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/user" element={<ProtectedRoute><AccountSidebar /></ProtectedRoute>}>
              <Route path="info" element={<AccountInfo/>}/>
              <Route path="update" element={<UserCustomerUpdatePage />}/>
              <Route path="orderhistory" element={<OrderHistory />}/>
              <Route path="followorder" element={<FollowOrder />}/>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <CartTab />
        <Footer />
 
      </BrowserRouter>
    </div>
  );
}

export default App;
