import { connect } from 'react-redux';
import {hideModal} from "../actions";
import ModalViewVideo from "../components/ModalViewVideo";

const defaultVideoModel = {
    title: '',
    media: [],
    cast: []
};

const mapStateToProps = (state, ownProps) => ({
    video: ownProps.video ? ownProps.video : defaultVideoModel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalViewVideo)