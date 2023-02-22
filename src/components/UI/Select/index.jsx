import React from 'react';

const Select = (props) => {
	const {
		options = [],
		handleChange,
		field,
		value
	} = props

	return (
		<select
			value={value}
			onChange={(event) => handleChange(event, field)}
		>
			{options.map((option) => (
				<option
							value={option.value}
						>
							{option.title}
						</option>
			))}
		</select>
	);
};

export default Select;