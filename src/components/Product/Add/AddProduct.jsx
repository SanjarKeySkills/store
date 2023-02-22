import React, {useContext, useState} from 'react';

import { StyledAddProduct } from "./styled";
import {ProductContext} from "../../../context/Store/Product/ProductContext";
import Form from "../components/Form"



const memoryTypes = [
  {
    title: '128гб',
    value: 128
  },
  {
    title: '256гб',
    value: 256
  },
  {
    title: '512гб',
    value: 512
  },
]

const AddProduct = () => {
  

  const {
    addProduct
  } = useContext(ProductContext)


  const handleSubmit = (form) => {
    addProduct(form)

  }

  return (
    <StyledAddProduct.Wrapper>
      <StyledAddProduct.Form onSubmit={handleSubmit}>
        <Form
			onSubmit={handleSubmit}
		
		/>
      </StyledAddProduct.Form>
    </StyledAddProduct.Wrapper>
  );
};

export default AddProduct;