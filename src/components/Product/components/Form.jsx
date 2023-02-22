import React, { useEffect, useState } from 'react';
import FormInput from "../../UI/Forminput/FormInput";
import Select from "../../UI/Select";
import Button from "@mui/material/Button";



const initialFormState = {
  title: '',
  description: '',
  price: 0,
  salePrice: 0,
  discountInPercent: 0,
  phone: '',
  author: '',
  memory: '512',
  image: [],
  url: '',
  countInStock: 0
}

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

const Form = (props) => {

	const {
		onSubmit,
		init
	} = props
	
const [form, setForm] = useState(initialFormState)

useEffect(() => {
	if(init) {
		setForm(init)
	}
}, [init])

const handleChange = (event, field) => {
    setForm((previousForm) => {
      return {
        ...previousForm,
        [field]: event.target.value
      }
    })
  }


const handleSubmit = (event) => {
	event.preventDefault()

	onSubmit(form)
	setForm(initialFormState)
}

return (
    <form onSubmit={handleSubmit}>
      <FormInput
        placeholder='Title'
        bxShd='0 0 3px red'
        handleChange={handleChange}
        type='text'
        field='title'
        name='title'
        value={form.title}
      />
      <FormInput
        placeholder='Description'
        bxShd='0 0 3px yellow'
        handleChange={handleChange}
        type='text'
        field='description'
        name='description'
        value={form.description}
      />
      <FormInput
        placeholder='Price'
        bxShd='0 0 3px blue'
        handleChange={handleChange}
        type='number'
        field='price'
        name='price'
        value={form.price}
      />
      <Select
        value={form.memory}
        options={memoryTypes}
        handleChange={handleChange}
        field='memory'
      />
      <Button
        type='submit'
        variant="outlined"
      >
        Добавить
      </Button>
    </form>
  );
};

export default Form;