import React from 'react';
import { connect } from 'react-redux';

import Specializations from '../components/Specializations';

import { getSpecializations } from '../actions/specializations';


function SpecializationsContainer(props) {
  return (
    <Specializations {...props} />
  )
}

const mapStateIntoProps = ({ specializations }) => {
  return {
    ...specializations,
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    getSpecializations: () => {
      dispatch(getSpecializations());
    },
  };
};


export default connect(
  mapStateIntoProps,
  mapDispatchIntoProps,
)(SpecializationsContainer);
