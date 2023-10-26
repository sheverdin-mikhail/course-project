import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className: string;
}

export const Navbar = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    return (
        <nav className={classNames(cls.nav)}>
            <div className={cls.links}>
                <AppLink
                    className={cls.firstLink}
                    to="/"
                    active={
                        pathname === '/'
                    }
                >
                    {t('nav-main')}
                </AppLink>

                <AppLink
                    active={
                        pathname === '/about'
                    }
                    to="/about"
                >
                    {t('nav-about-us')}
                </AppLink>
            </div>
        </nav>
    );
};
