import React from "react";
import {connect} from "react-redux";
import ModalView from "./ModalView";

const MODAL_COMPONENTS = {
    'VIEW_VIDEO': ModalView,
    // 'EDIT_VIDEO': ModalEdit,
};

const mapStateToProps = (state, ownProps) => {
    return {
        modalType: state.modal.modalType,
        modalProps: state.modal.modalProps
    }
};

const ModalRoot = ({modalType, modalProps}) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
};

export default connect(mapStateToProps)(ModalRoot);