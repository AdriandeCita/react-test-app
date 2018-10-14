import { connect } from 'react-redux';
import PopoverPoster from "../components/PopoverPoster";
import {hidePopover} from "../actions";

const mapStateToProps = (state, ownProps) => {
    if (state.popover.popoverType === 'ADD_POSTER') {
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
)(PopoverPoster)