"use strict"
//Books Reducers
export function booksReducers
(state={
    books:
    [{
        id: 1,
        title: 'this is a book title',
        description: 'this is a book description',
        price: 77.7
    },
    {
        id: 2,
        title: 'this is a second book title',
        description: 'this is a second book description',
        price: 50
    }]
}, action){
    switch(action.type){
        case "GET_BOOKS":
        return {...state, books:[...state.books]}
        break;
        case "POST_BOOK":
        // let books =
        // state.books.concat(action.payload);
        // return {books};
        return {books:[...state.books,
        ...action.payload]}
        break;
        case "DELETE_BOOK":
        // Create a copy of the current array of books
        const currentBookToDelete =
        [...state.books]
        // Determine at which index in books array is the book to be deleted
        const indexToDelete =
        currentBookToDelete.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        )
        // use slice to remove the book at specified index
        return {books:
        [...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 
         1)]}
         break;

         case "UPDATE_BOOK":
         // Create a copy of the current array of books
         const currentBookToUpdate = [...state.books]
         // Determine at which index the book should be updated
         const indexToUpdate = 
         currentBookToUpdate.findIndex(
             function(book){
                 return book.id === action.payload.id;
             }
         )
            // Create a new book object with the new values and with the same array index we want to replace. Use spread.

            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }
            console.log("what is it newBookToUpdate", newBookToUpdate);

            // use slice to remove the book at specfic index
                return {books:
                [...currentBookToUpdate.slice(0, indexToUpdate),
                newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate + 
                1)]}
                break;
    }
            return state
}