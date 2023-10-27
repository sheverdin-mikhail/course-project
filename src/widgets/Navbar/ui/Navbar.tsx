import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className: string;
}

export const Navbar = () => (
    <nav className={classNames(cls.nav)}>
        <div className={cls.links} />
    </nav>
);
