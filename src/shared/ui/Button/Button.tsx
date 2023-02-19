import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const enum ThemeButton {
    CLEAR = 'clear',
    BORDER = 'border',
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { 
        className,
        children,
        theme=ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.button, {}, [cls[theme], className])} {...otherProps}>
            {children}
        </button>
 );
}