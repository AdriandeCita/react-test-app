import {connect} from 'react-redux';
import {hidePopover} from "../actions";
import PopoverTrailer from "../components/PopoverTrailer";

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
    hidePopover: () => dispatch(hidePopover())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopoverTrailer)