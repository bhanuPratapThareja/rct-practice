import { Outlet } from 'react-router-dom'
import Header from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import classes from './RootLayout.module.css'

const RootLayout = () => {
    return <>
        <Header className={classes.header} />
        <div className={classes.rootlayout}>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default RootLayout