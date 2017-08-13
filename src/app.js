"use strict"
// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


// REDUX
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
//Import ACTIONS
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/bookActions';


// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/bookslist';


render(
    <Provider store={store}>
        <BooksList />
    </Provider>,  document.getElementById('app')  
);


// STEP 2 create and dispatch actions 

//store.dispatch(postBooks(
//
// ))

// STEP 3 define reducers
const reducer = function(state={books:[]}, action){
    switch(action.type){
        case "POST_BOOK":
       // let books = state.books.concat(action.payload)
       // return {books};
       return {books:[...state.books, ...action.payload]}
        break;
        case "DELETE_BOOK":
        // Create a copy of the current array of books
        const currentBookToDelete = [...state.books]
        // Determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        ) 
    // use slice to remove the book at the specified index    
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    const currentBookToUpdate = [...state.books]

    const indexToUpdate = currentBookToUpdate.findIndex(
        function(book){
            return book.id === action.payload.id;
        }
    )

    // Create a new book object with new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat method too
    const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
    }
    // This log has the purpose to show you how newBookToUpdate looks like

    console.log("what is it newBookToUpdate", newBookToUpdate);
    // use slice to remove the book at the specified index, replace with the new object and concatenate with the rest of items in the array
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;
} 

return state 

}










