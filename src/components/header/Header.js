import { Component } from 'react';
import classes from './Header.module.css';

/**
 * This component serves as the toolbar of the site.
 * It contains link to actions frequently performed by users.
 */
class Header extends Component{

    render(){
        return(
            <header>
                <div className={classes.toolbar}>
                    <div>
                        <div className={classes.nav}>
                            <div>
                                <img className={classes.mob} src="images/menu.svg" alt="menu icon" />
                                <p className={`${classes.link} ${classes.mob}`}>All</p>
                                <p className={`${classes.link} ${classes.desk}`}>Gmail</p>
                                <p className={classes.link}>Images</p>
                            </div>
                            <div>
                                <div className={classes.navIcon}>
                                    <img src="images/appl.svg" alt="apps icon" />
                                </div>
    
                                <p className={classes.btn}>Sign in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    
        );
    }
}

export default Header;