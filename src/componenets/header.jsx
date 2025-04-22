import React from 'react';
import classes from './header.module.css';
import Model from './model';

function Header() {
    const [showModel, setShowModel] = React.useState(false);
    function openDialogBox() {
        setShowModel(true);
    }

    function closeDialogBox() {
        setShowModel(false);
    }

    return (
        <>
            <header className={classes.header}>
                <nav className={classes.tabs}>
                <a href="#" className={`${classes.tab} ${classes.active}`}>1</a>
                <a href="#" className={classes.tab}>2</a>
                </nav>
                <button className={classes['create-button']} onClick={openDialogBox}>Create</button>
            </header>
            {showModel && <Model closeModel={closeDialogBox}></Model>}
        </>
    )
}

export default Header;