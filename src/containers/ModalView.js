import {connect} from 'react-redux';
import {hideModal, showDescriptionForm} from "../actions";
import ModalViewVideo from "../components/ModalViewVideo";

const defaultVideoModel = {
    title: '',
    media: [],
    cast: []
};

const mapStateToProps = (state, ownProps) => ({
    video: ownProps.video ? ownProps.video : defaultVideoModel,
    visibleDescriptionForm: state.descriptionForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideModal: () => dispatch(hideModal()),
    showDescriptionForm: () => dispatch(showDescriptionForm(true)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalViewVideo)