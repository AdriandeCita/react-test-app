import React from 'react';

const SortActionItem = ({active, children, onClick}) => (
    <div
        className={'sort-action ' + (active ? 'active' : '')}
        onClick={onClick}
    >{children}</div>
);

export default SortActionItem;
