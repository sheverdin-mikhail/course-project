import React, { Suspense } from 'react'
import './styles/index.scss'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import {classNames} from './helpers/classNames'




export const App = () => {

  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"} >О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync/>} />
            <Route path={'/'} element={<MainPageAsync/>} />
        </Routes>
      </Suspense>
    </div>
  )
}
