import React, {Component} from 'react';
import './EditDescriptionForm.css';

class EditDescriptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title ? this.props.title : '',
            year: this.props.release
                ? new Date(Date.parse(this.props.release)).getFullYear()
                : '',
            rating: this.props.rating ? this.props.rating : '',
            length: this.props.length ? this.props.length : '',
            description: this.props.description ? this.props.description : '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = Object.assign({}, this.state);
        const date = new Date(0);
        date.setYear(this.state.year);

        data.release = date.toISOString();

        this.props.setDescription(data);
        this.props.hideDescriptionForm();
    }

    render() {
        return (
            <div className="modal-body-wrapper description-form">
                <header>Add description</header>
                <form action="#" className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter title" className="text-input" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <div className="input-row">
                        <input type="text" placeholder="Enter year" className="text-input" name="year" value={this.state.year} onChange={this.handleChange}/>
                        <input type="text" placeholder="Enter rating" className="text-input" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                        <input type="text" placeholder="Enter length" className="text-input" name="length" value={this.state.length} onChange={this.handleChange}/>
                    </div>

                    <textarea rows="6" placeholder="Enter description" className="text-input" name="description" value={this.state.description} onChange={this.handleChange}/>

                    <button type="submit" className="btn-submit">Save</button>
                </form>
            </div>
        )
    }

}

export default EditDescriptionForm;
