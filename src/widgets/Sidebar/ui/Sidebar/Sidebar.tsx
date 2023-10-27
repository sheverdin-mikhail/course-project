import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={cls.links}>
                <AppLink
                    className={classNames(cls.item, {
                        [cls.active]: pathname === RoutePath.main,
                    }, [])}
                    to={RoutePath.main}
                    active={
                        pathname === RoutePath.main
                    }
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('nav-main')}
                    </span>
                </AppLink>
                <AppLink
                    className={classNames(cls.item, {
                        [cls.active]: pathname === RoutePath.about,
                    }, [])}
                    to={RoutePath.about}
                    active={
                        pathname === RoutePath.about
                    }
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('nav-about-us')}
                    </span>
                </AppLink>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.langSwitcher} />
            </div>
        </div>
    );
};
