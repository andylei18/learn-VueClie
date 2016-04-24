import api from '../api'
import * as types from './mutation-types'

export const addToCart = ({ dispatch }, product) => {
  if (product.inventory > 0) {
    dispatch(types.ADD_TO_CART, product.id)
  }
}

export const checkout = ({ dispatch, state }, products) => {
  const savedCartItems = [...state.cart.added]
  dispatch(types.CHECKOUT_REQUEST)
  api.buyProducts(
    products,
    () => dispatch(types.CHECKOUT_SUCCESS),
    () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
  )
}

export const getAllProducts = ({ dispatch }) => {
  api.getProducts(products => {
    dispatch(types.RECEIVE_PRODUCTS, products)
  })
}

export const getAjax = ({ dispatch }) => {
  api.getLists().then(response => {
    if(!response.code == 0){
      return dispatch(types.FAILURE_GET_LISTS)
    }
    dispatch(types.SUCCESS_GET_LISTS, { lists: response })
  }, response => {
    dispatch(types.FAILURE_GET_LISTS)
  })
}

