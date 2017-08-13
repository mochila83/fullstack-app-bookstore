"use strict"
import { combineReducers } from 'redux';

// Import Reducers to be Combined
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// Here Combine the Reducers
export default combineReducers({
    books: booksReducers,
    cart: cartReducers 
})


