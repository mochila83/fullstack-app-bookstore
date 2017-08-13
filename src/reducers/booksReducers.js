"use strict"

// Books Reducers
export function booksReducers(state={
    books:
    [{
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
    }]
    }, action){
    switch(action.type){
        case "GET_BOOKS":
       return {...state, books:[...state.books]}
        break;
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