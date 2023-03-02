import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    active?: boolean;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { 
        className, 
        children, 
        to, 
        active=false,
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps 
    } = props;

    return (
        <Link 
            to={to} 
            className={classNames(cls.AppLink, {[cls.active]: active}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
 );
}