import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      // add max price of all products to filters piece of state
      let maxPrice = action.payload.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)
      // console.log(maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      }
    case SET_GRIDVIEW:
      return { ...state, grid_view: true }
    case SET_LISTVIEW:
      return { ...state, grid_view: false }
    case UPDATE_SORT:
      return { ...state, sort: action.payload }
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state
      // copy filtered products and set to tempProducts in case we have a value that doesn't match it will return filtered products array
      let tempProducts = [...filtered_products]
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price)
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price)
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return { ...state, filtered_products: tempProducts }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default filter_reducer
