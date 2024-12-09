import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import orders from "./orders";
import cart from '../stores/CartData'
import orderItems from './orderItems';
import orderstatuses from './orderStatus';

export default combineReducers({
  products,
  categories,
  orders,
  cart,
  orderItems,
  orderstatuses,
});