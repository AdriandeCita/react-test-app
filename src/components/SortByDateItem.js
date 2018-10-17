import React from 'react';

const SortByDateItem = ({active, children, activeModal, onClick}) => (
    <div
        className={`sort-action ${active ? 'active' : ''} ${activeModal.modalType ? 'hidden' : ''}`}
        onClick={onClick}
    >{children}</div>
);

export default SortByDateItem;
