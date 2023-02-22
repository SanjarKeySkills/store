import React, { useContext } from 'react';
import { ProductContext } from "../../context/Store/Product/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
import {StyledProducts} from "./styled";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const {
    products,
	deleteProduct
  } = useContext(ProductContext)

	console.log(products)

  const handleDelete = (id) => {
	const confirmed = window.confirm('Are you preatty shure whant to delete')

	if(confirmed) {
		deleteProduct(id)
	}
  }

const goEditProductWithId = (id) => {
	navigate({
pathname: `/edit-product/${id}`,
	})
}

  return (
    <StyledProducts.Wrapper>
      <StyledProducts.List>
        {!products.length ? <></> : products.map((product) => {
          return (
            <ProductCard
				memory={product.memory}
				key={product.id}
				images={product.image}
				title={product.title}
				description = {product.description}
				price = {product.price}
				countInStock = {product.countInStock}
				id = {product.id}
				handleDelete = {handleDelete}
				goEditProductWithId={goEditProductWithId}
            />
          )
        })}
      </StyledProducts.List>
    </StyledProducts.Wrapper>
  );
};

export default Products;