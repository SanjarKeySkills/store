import React, { useContext } from 'react'; 
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../../context/Store/Product/ProductContext';
import Form from '../components/Form';

const EditProduct = () => {
	const {
		getProductById,
		editedProduct
	} = useContext(ProductContext)

const { id } = useParams()
useEffect(() => {
	getProductById(id)
},[])
console.log(id);
console.log(editedProduct);

	const onSubmit = (form) => {
		console.log(form);		
	}
    return ( 
        <Form
		init={editedProduct}
		onSubmit={onSubmit}
		/>
    ); 
}; 
 
export default EditProduct;