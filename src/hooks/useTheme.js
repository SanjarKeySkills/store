import { useContext } from "react";
import { ThemeContext } from "../context/Theme/ThemeContext";

const THEME = {
    DARK: "dark",
    LIGHT: "light",
};

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    };

    return {
        theme,
        toggleTheme,
    };
}
