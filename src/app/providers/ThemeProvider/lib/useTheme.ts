import { useContext } from 'react';
import { ThemeContext, Themes, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { toggleTheme, theme };
}
