"use strict"

// Add to Cart
export function addToCart(book){
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}
// Update Cart
export function updateCart(_id, unit){
    return {
        type: "UPDATE_CART",
        _id: _id,
        unit: unit
    }
}
// Delete from Cart
export function deleteCartItem(cart){
    return {
        type: "DELETE_CART_ITEM",
        payload: cart
    }
}