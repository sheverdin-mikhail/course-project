import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {

    // @ts-ignore
    // Так делать низя:)
    setTimeout(()=>resolve(import('./MainPage')), 1500)
}))