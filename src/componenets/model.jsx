import React from 'react';
import classes from './model.module.css';

function Model({closeModel}) {

    return (
        <>
        <div className={classes['model-container']}>
            <div className={classes.overlay} id="overlay"></div>
            <div className={classes.modal} id="myModal">
                <div className={classes['modal-content']}>
                    <button className={classes.modalClose} onClick={closeModel} aria-label="Close modal">&times;</button>
                    <h2>Modal Title</h2>
                    <p>This is the content inside the modal box.</p>
                    <button className={classes.modalClose} onClick={closeModel}>Close</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Model;