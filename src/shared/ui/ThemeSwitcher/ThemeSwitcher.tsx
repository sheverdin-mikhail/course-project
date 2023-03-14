import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import ThemeIcon from 'shared/assets/icons/theme-button.svg';
import cls from './ThemeSwitcher.module.scss';
import { AppLinkTheme } from '../AppLink/AppLink';

interface ThemeSwitcherProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    const { toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            {...otherProps}
        >
            <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
        </Button>
    );
};
