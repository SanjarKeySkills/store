import { Button } from '@mui/material';
import React from 'react';
import { StyledProductCard } from './styled';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ProductCard = (props) => {
	const {
		memory,
		images,
		title,
		description,
		price,
		countInStock,
		id,
		handleDelete,
		goEditProductWithId
		} = props

	return (
		<StyledProductCard.Wrapper>
				<StyledProductCard.Image src={images.length ? images[0] : ''}/>
			<StyledProductCard.Wrapper>
				<StyledProductCard.Memory>
					{memory} Gb
				</StyledProductCard.Memory>
				<StyledProductCard.Title>
					{title}
				</StyledProductCard.Title>
				<StyledProductCard.Description>
					{description}
				</StyledProductCard.Description>
				<StyledProductCard.Price>
					{price} usd
				</StyledProductCard.Price>
				<StyledProductCard.CountInStock>
					{countInStock} % скидка
				</StyledProductCard.CountInStock>
				<StyledProductCard.ButtonWrapper>
					<Button
						size= "small"
						variant="outlined"
						startIcon={<DeleteIcon />}
						onClick={() => handleDelete(id)}>
						Delete
					</Button>
					<Button
						size= "small"
						variant="outlined"
						startIcon={<EditIcon />}
						onClick={() => goEditProductWithId(id)}>
						
						Edit
					</Button>

					<Button
						size="medium"
						variant="outlined">
						Whatch all
					</Button>
				</StyledProductCard.ButtonWrapper>

			</StyledProductCard.Wrapper>
		</StyledProductCard.Wrapper>
	);
	// description мы получаем из пропсов и передаем в компоненте продуктс
};
export default ProductCard;