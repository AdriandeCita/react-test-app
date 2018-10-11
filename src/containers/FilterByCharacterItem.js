import { connect } from 'react-redux'
import {setVideoFilter} from '../actions'
import FilterActionItem from "../components/FilterActionItem";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.character.id === state.videoCharacterFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVideoFilter(ownProps.character.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterActionItem)
