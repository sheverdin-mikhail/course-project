import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'


interface NavbarProps {
    className: string;
}


export const Navbar = () => {

  const {t} = useTranslation()

  return (
    <nav className={classNames(cls.nav)}>
        <div className={cls.links}>
            <AppLink className={cls.firstLink} theme={AppLinkTheme.SECONDARY} to={"/"}>{t('nav-main')}</AppLink>
            <AppLink to={"/about"} >{t('nav-about-us')}</AppLink>
        </div>
    </nav>
  )
}

