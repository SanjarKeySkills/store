import React from 'react';
import { StyledInput } from './styled';

const Input = (props) => {

const {
	handler,
	name,
	label,
	...otherProps
} = props

const handleChange = (event) => {
	handler(event.target.value)
}

	return (
		<React.Fragment>
			{
				label && (
					<StyledInput.Label for={name}>
						{label}
					</StyledInput.Label>
				)
			}
			<StyledInput.Input 
			onChange={(event) => handleChange(event)}
			name={name} {...otherProps}/>
		</React.Fragment>
	);
};

// ... это сперд оператор и мы все вытакскиаваем из этoго пропса

export default Input;