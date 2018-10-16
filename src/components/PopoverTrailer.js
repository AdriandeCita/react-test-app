import React from 'react';

const PopoverTrailer = ({ popoverProps, visible, hidePopover }) => (
    <div className={`popover popover-trailer ${visible ? 'visible': ''}`}>
        <header>Add trailer</header>
        <button
            className="modal-close-button button-dark"
            title="Close"
            onClick={hidePopover}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>

        <form action="#" className="form">
            <input type="text" placeholder="Enter URL or embed code" className="text-input"/>
            <button type="submit" className="btn-submit">Add</button>
        </form>
    </div>
);

export default PopoverTrailer;
