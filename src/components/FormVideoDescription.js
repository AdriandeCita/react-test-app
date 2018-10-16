import React from 'react';
import './FormVideoDescription.css';

const FormVideoDescription = ({ hideDescriptionForm }) => (
    <div className="modal-body-wrapper description-form">
        <header>Add description</header>
        <form action="#" className="form" onSubmit={hideDescriptionForm}>
            <input type="text" placeholder="Enter title" className="text-input"/>
            <div className="input-row">
                <input type="text" placeholder="Enter year" className="text-input"/>
                <input type="text" placeholder="Enter rating" className="text-input"/>
                <input type="text" placeholder="Enter length" className="text-input"/>
            </div>

            <textarea name="" rows="6" placeholder="Enter description" className="text-input"></textarea>

            <button type="submit" className="btn-submit">Save</button>
        </form>
    </div>
);

export default FormVideoDescription;
