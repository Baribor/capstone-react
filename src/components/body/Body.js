import { useState } from "react";
import classes from './Body.module.css';


const Body = () => {

    const [entry, setentry] = useState('')

    /**
     * Triggers when the text in the search box changes, and updates the preview text with the text.
     * @param {*Event} evt 
     * @component
     * @example
     * if (evt.target.value is not empty)
     *      hide logo and display text
     * else
     *      display logo
     */
    const displayEntry = (evt) => {
        setentry(evt.target.value);

        let logo = document.getElementById("logo");

        if (evt.target.value) {
            logo.style.display = "none";
        } else {
            logo.style.display = "block";
        }
    }

    return (

        <main>
            <div className={classes.logo}>
                <img id="logo" src="./images/shlogo.png" alt="Site logo" />
                <p id="entry">{entry}</p>
            </div>
            <div>
                <div className={classes.search}>
                    <div className={classes.input}>
                        <div>
                            <img id="logo" src="./images/magnify.svg" alt="search icon" />
                        </div>
                        <div>
                            <input onInput={(evt) => displayEntry(evt)} type="search" name="search" id="search" className={classes.searchInput}
                                aria-label="Search for what?"
                                aria-required="false"
                            />
                        </div>
                        <div>
                            <img src="./images/google-mic.svg" alt="voice search" />
                        </div>
                    </div>
                    <div>
                        <p>Google Search</p>
                        <p>I'm Feeling Lucky</p>
                    </div>
                </div>
                <div>
                    <div className={classes.lang}>
                        <p>Google offered in:</p>
                        <p>Hausa</p>
                        <p>Igbo</p>
                        <p>Èdè Yorùbá</p>
                        <p>Nigerian Pidgin</p>
                    </div>
                </div>
            </div>
        </main>
    );

}

export default Body;