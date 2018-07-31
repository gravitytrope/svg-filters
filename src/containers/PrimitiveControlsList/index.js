import {connect} from 'react-redux';

import {addPrimitive} from '../../store/actions';

import ControlsListTemplate from '../../components/ControlsList';

const mapStateToProps = (state) => {
  return {
    items: state.primitiveControls
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onClick: (primitive) => {
      dispatch(addPrimitive(primitive));
    }
  };
};

const PrimitiveControlsList = connect(
  mapStateToProps,
  mapDispatchProps
)(ControlsListTemplate);

export default PrimitiveControlsList;