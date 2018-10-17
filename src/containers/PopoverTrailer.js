import {connect} from 'react-redux';
import {addTrailer, hidePopover} from "../actions";
import TrailerPopover from "../components/TrailerPopover";

const mapStateToProps = (state, ownProps) => {
    if (state.popover.popoverType === 'ADD_TRAILER') {
        return {
            popoverProps: state.popover.popoverProps,
            visible: true
        }
    } else {
        return {};
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    hidePopover: () => dispatch(hidePopover()),
    addTrailer: (trailerData) => dispatch(addTrailer(trailerData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrailerPopover)