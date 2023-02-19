import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import cls from './Navbar.module.scss'


interface NavbarProps {
    className: string;
}


export const Navbar = () => {
  return (
    <nav className={classNames(cls.nav)}>
        <ThemeSwitcher />
        <div className={cls.links}>
            <AppLink className={cls.firstLink} theme={AppLinkTheme.SECONDARY} to={"/"}>Главная</AppLink>
            <AppLink to={"/about"} >О нас</AppLink>
        </div>
    </nav>
  )
}

