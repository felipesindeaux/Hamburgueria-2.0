import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";
import tokenReducer from "./modules/token/reducer";
import filteredProductsReducer from "./modules/filteredProducts/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  token: tokenReducer,
  filteredProducts: filteredProductsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
