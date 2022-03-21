// use local storage to manage cart data
const addToDB = id => {
    let shoppingCart = {};
    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    // add quantity
    const quantity = shoppingCart[id]

    if (quantity) {
        const newQantity = quantity + 1
        shoppingCart[id] = newQantity
        // localStorage.setItem(id, newQantity)
    }
    else {
        shoppingCart[id] = 1
        // localStorage.setItem(id, 1)
    }
    // to add
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }

    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export {
    addToDB,
    removeFromDb,
    deleteShoppingCart
}





// const addToDB = id => {
//     const quantity = localStorage.getItem(id)
//     if (quantity) {
//         console.log('already exists')
//         const newQantity = parseInt(quantity) + 1
//         // localStorage.setItem(id, newQantity)
//     }
//     else {
//         // localStorage.setItem(id, 1)
//     }
// }

// export { addToDB }