import {createStore} from 'redux';
import products from '../Reducers/userRegister';
const productsReducer=products;
const store=createStore(productsReducer);
window.store=store;
export default store;
