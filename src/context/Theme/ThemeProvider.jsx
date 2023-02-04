import React, {useState} from 'react';
import { ThemeContext } from "./ThemeContext"

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark')

		const defaultProps = {
			theme: theme,
			setTheme: setTheme
		}

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;