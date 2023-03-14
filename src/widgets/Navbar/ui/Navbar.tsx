import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'


interface NavbarProps {
    className: string;
}


export const Navbar = () => {

	const {t} = useTranslation()
	const {pathname} = useLocation()

	return (
		<nav className={classNames(cls.nav)}>
			<div className={cls.links}>
				<AppLink 
					className={cls.firstLink}
					to={"/"} 
					active = {    
						pathname==='/'
							? true
							: false
					}   
				>
					{t('nav-main')}
				</AppLink>

				<AppLink 
					active = {
						pathname==='/about'
							? true
							: false
					}  
					to={"/about"} 
				>
					{t('nav-about-us')}
				</AppLink>
			</div>
		</nav>
	)
}

