"use strict"
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';


// STEP 1 Create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
    <Provider store={store}>
    <BooksList />
    </Provider>, document.getElementById('app')

);

 // STEP 2 create and dispatch actions
   // store.dispatch(postBooks(
      // [{
        //    id: 1,
          //  title:'this is the book title',
           // description: 'this is the book description',
           // price: 77.70

       // },
       // {
        // id: 2,
      //  title: 'this is the second book title',
      //  description: 'this is the second book description',
      //  price: 50.00
       // }]
    // ))

    // DELETE a book
    // store.dispatch(deleteBooks(
   // {id: 1}
   // ))

    // UPDATE a book
  //  store.dispatch(updateBooks(
    //    {
      //      id: 2,
        //    title:'Learn React'
      //  }
   // ))


    //---->> CART ACTIONS <<-----
    // ADD to cart
   // store.dispatch(addToCart([{id: 1}]))
   

//STEP 3 define reducers

const reducer = function(state={books:[]}, 
    action){
    switch(action.type){
        case "POST_BOOK":
      // let books = state.concat(action.payload);
      // return {books};
        return {books:[...state.books,
            ...action.payload]}
        break;
        case "DELETE_BOOK":
        // Create copy of current array of books

        const currentBookToDelete = 
        [...state.books]
        // Determine at which index in the books array the book is to be deleted
        const indexToDelete =
    currentBookToDelete.findIndex(
      function(book){
          return book.id === action.payload.id;
      }  
    )
    // use slice to remove the book at the specific index
        return {books:
        [...currentBookToDelete.slice(0,
        indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]}
            break;
            case "UPDATE_BOOK":
            // Create a copy of the current array of books
            const currentBookToUpdate =
            [...state.books]
            // Determine at which index in books array is the book to be deleted
                const indexToUpdate =
                currentBookToUpdate.findIndex(
                    function(book){
                        return book.id === action.payload.id;
                    }
                )
                // Create a new book object 

                const newBookToUpdate = {
                    ...currentBookToUpdate[indexToUpdate],
                    title: action.payload.title
                }
                console.log("What is it newBookToUpdate",
            newBookToUpdate);
            //use slice to remove book from index
            return {books:
            [currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate,
            ...currentBookToUpdate.slice(indexToUpdate + 
                1)]}
                break;
    }
        return state
    } 









