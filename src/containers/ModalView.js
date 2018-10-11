import { connect } from 'react-redux';
import {hideModal} from "../actions";
import ModalViewVideo from "../components/ModalViewVideo";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalViewVideo)