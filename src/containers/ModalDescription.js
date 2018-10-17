import {connect} from 'react-redux';
import {showDescriptionForm} from "../actions";
import ModalDescription from "../components/ModalDescription";

const mapStateToProps = (state, ownProps) => ({
    visibleDescriptionForm: state.descriptionForm,
    title: state.video.title,
    release: state.video.release,
    description: state.video.description,
    rating: state.video.rating,
    length: state.video.length
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    showDescriptionForm: () => dispatch(showDescriptionForm(true))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalDescription)