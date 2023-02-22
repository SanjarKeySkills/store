import React, { useContext, useEffect, useState } from 'react';
import Products from "../../components/Products/Products";
import {ProductContext} from "../../context/Store/Product/ProductContext";
import {Pagination} from "@mui/material";
import Select from "../../components/UI/Select";

const limitOption = [
  {
    value: 3,
    title: 3
  },
  {
    value: 5,
    title: 5
  },
  {
    value: 10,
    title: 10
  }
]

const paginationStyle = {
  margin: '0 auto',
  width: 'fit-content'
}

const ProductsPage = () => {

  const {
    getProducts,
    count
  } = useContext(ProductContext)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)
  const [paginationCount, setPaginationCount] = useState(Math.ceil(count / limit))


  useEffect(() => {
    getProducts('', page, limit)
  }, [page, limit])

  useEffect(() => {
    setPaginationCount(Math.ceil(count / limit))

    if(Math.ceil(count / limit) < page) {
      setPage(Math.ceil(count / limit))
    } else {
      setPage(1)
    }
  }, [count, limit])

  const handlePageChange = (event, page) => {
    setPage(page)
  }

  const handleLimitChange = (event) => {
    setLimit(+event.target.value)
  }


  return (
    <React.Fragment>
      <Select
        handleChange={handleLimitChange}
        value={limit}
        options={limitOption}
      />
      <Products />
      <Pagination
        style={paginationStyle}
        page={page}
        count={paginationCount}
        onChange={handlePageChange}
        color="secondary"
      />
    </React.Fragment>
  )
};

export default ProductsPage;