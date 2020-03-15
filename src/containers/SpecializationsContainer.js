import React from 'react';
import { connect } from 'react-redux';

import { getSpecialization } from '../actions/specializations';

function SpecializationsContainer({ specializations, selected, onChange }) {
  return (
    <div></div>
  )
}

const mapStateIntoProps = ({ specializations }) => {
  return {
    specializations
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    getSpecialization: () => {
      dispatch(getSpecialization());
    },
  };
};

export default connect(
  mapStateIntoProps,
  mapDispatchIntoProps,
)(SpecializationsContainer);
