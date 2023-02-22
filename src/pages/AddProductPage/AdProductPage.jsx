import React from 'react';
import AddProduct from '../../components/Product/Add/AddProduct';

const AddProductPage = () => {
	return <AddProduct />
};
// парные компонены нужны когда внутри передаем чилдрены див например 
// и в пропсах можно пинять этот чилдрен и показать его. 
// это нужно в лэйаутах, например показать высший порядок, как инпут.
export default AddProductPage;