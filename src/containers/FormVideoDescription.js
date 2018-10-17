import {connect} from 'react-redux';
import FormVideoDescription from "../components/FormVideoDescription";
import {hideDescriptionForm, setDescription} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    visibleDescriptionForm: state.descriptionForm,
    title: state.video.title,
    release: state.video.release,
    description: state.video.description,
    rating: state.video.rating,
    length: state.video.length
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideDescriptionForm: () => dispatch(hideDescriptionForm()),
    setDescription: (descriptionData) => dispatch(setDescription(descriptionData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormVideoDescription)