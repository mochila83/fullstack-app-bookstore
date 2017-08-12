"use strict"
import { createStore } from 'redux';

// STEP 3 define reducers
const reducer = function(state={books:[]}, action){
    switch(action.type){
        case "POST_BOOK":
       // let books = state.books.concat(action.payload)
       // return {books};
       return {books:[...state.books, ...action.payload]}
        break;
    }
    return state
}

// STEP 1 create the store
const store = createStore(reducer);


store.subscribe(function(){
    console.log('current state is: ', store.getState());
   // console.log('current price: ', store.getState()[1].price);
})

// STEP 2 create and dispatch actions 

store.dispatch({
    type:"POST_BOOK", 
    payload: [{
        id: 1,
        title: 'this is a book title',
        description: 'this is a book description',
        price: 77.70
    },
    {
        id: 2,
        title: 'this is a second book title',
        description: 'this is a second book description',
        price: 77.70
    }

    ]
})

// DISPATCH a second action

store.dispatch({
    type:"POST_BOOK",
    payload: [{
        id: 3,
        title:'this is the third book title',
        description: 'this is the third book description',
        price: 44.43
    }]

})




