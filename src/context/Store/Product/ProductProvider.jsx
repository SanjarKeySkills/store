import React, { useReducer } from 'react';
import { ProductContext } from "./ProductContext";
import axios from "axios";

const initialState = {
  products: [],
  totalCount: null,
  editedProduct: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.count
      }
    }
    case 'DELETE_PRODUCT': {
      return {
        ...state,
        products: state.products.filter(product => product.id != action.payload)
      }
    }
    case 'GET_PRODUCT_BY_ID': {
      return {
        ...state,
        editedProduct: action.payload
      }
    }
    default: {
      return state
    }
  }
}

const API_URL = 'http://localhost:4000'
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getProducts = async (query = '', page = 1, limit = 3) => {
    const res = await axios.get(`${API_URL}/products?q=${query}&_page=${page}&_limit=${limit}`)

    dispatch({
      type: 'GET_PRODUCTS',
      payload: {
        data: res.data,
        count: +res.headers['x-total-count']
      }
    })
  }
  
  const getProductById = async (id) => {
    const res = await axios.get(`${API_URL}/products/${id}`)
    
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: res.data
    })
  }

  const addProduct = async (product) => {
    try {
      const result = await axios.post(`${API_URL}/products`, product)

      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async (id) => {
    try {
      const res = axios.delete(`${API_URL}/products/${id}`)

      console.log(res);

      dispatch({
        type: 'DELETE_PRODUCT',
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ProductContext.Provider value={{
      products: state.products,
      count: state.totalCount,
      getProducts,
      addProduct,
      deleteProduct,
	  getProductById,
	  editedProduct: state.editedProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;