import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // passed in from add to cart
      const { id, color, amount, product } = action.payload
      const tempItem = state.cart.find((i) => i.id === id + color)
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })
        return { ...state, cart: tempCart }
      } else {
        // add new item to cart
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }
    case REMOVE_CART_ITEM:
      const temporaryCart = state.cart.filter(
        (item) => item.id !== action.payload
      )
      return { ...state, cart: temporaryCart }
    case CLEAR_CART:
      return { ...state, cart: [] }
    case TOGGLE_CART_ITEM_AMOUNT:
      const { item_id, value } = action.payload
      // console.log(item_id, value)
      const tempCart = state.cart.map((item) => {
        if (item.id === item_id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.max) {
              newAmount = item.max
            }
            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      return { ...state, cart: tempCart }
    // reducer for price totals
    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem
          total.total_items += amount
          total.total_amount += price * amount
          return total
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      )
      return { ...state, total_items, total_amount }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default cart_reducer
