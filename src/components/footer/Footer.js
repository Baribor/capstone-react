import { Component } from "react";
import classes from './Footer.module.css';


/**
 * Component that acts as the footer of the page. It contain links to extra functionality of the page.
 * 
 */
class Footer extends Component{


    render(){

        return(
            <footer>
            <div>
                <p>Nigeria</p>
            </div>
            <div>
                <div className={classes.mob}>
                    <div>
                        <p>Settings</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
                <div className={classes.desk}>
                    <div>
                        <p>About</p>
                        <p>Advertising</p>
                        <p>Business</p>
                        <p>How Search Works</p>
                    </div>
                </div>
                <div className={classes.mob}>
                    <div>
                        <p>Advertising</p>
                        <p>Business</p>
                        <p>About</p>
                    </div>
                </div>

                <div className={classes.desk}>
                    <div>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;