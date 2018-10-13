import React from 'react';
import './ButtonRound.css';

const ButtonRound = ({ onClick, type, customClassName, caption }) => (
    <button onClick={onClick} className={`button-round ${customClassName}`}>
        {buttonIcons[type]}
        <span className="caption">{caption}</span>
    </button>
);

const buttonIcons = {
    play: (<svg className="icon-container" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" className="icon"/></svg>),
    edit: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.136719 56.134766" height="56.134766" className="icon-container" width="56.136719"><path d="M 28.06836,0 A 28.067797,28.067797 0 0 0 0,28.066406 28.067797,28.067797 0 0 0 28.06836,56.134766 28.067797,28.067797 0 0 0 56.136719,28.066406 28.067797,28.067797 0 0 0 28.06836,0 Z m 8.605468,14.388672 c 0.38753,0 0.773963,0.145062 1.070313,0.441406 l 3.558594,3.558594 c 0.5927,0.59269 0.5927,1.547934 0,2.140625 l -2.779297,2.78125 -5.699219,-5.699219 2.78125,-2.78125 c 0.29634,-0.296337 0.680829,-0.441406 1.068359,-0.441406 z m -5.476562,4.849609 5.699219,5.699219 -16.808594,16.808594 h -5.699219 v -5.699219 z" className="icon"/></svg>),
    add: (<svg xmlns="http://www.w3.org/2000/svg" className="icon-container" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" className="icon"/></svg>)
};

export default ButtonRound;
