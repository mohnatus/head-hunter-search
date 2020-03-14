import React from 'react';
import PropTypes from 'prop-types';
// import Specializations from '../Specializations';
import Keywords from '../Keywords';

function Filters({ keywords, setKeywords }) {
  return (
    <div>
      <Keywords keywords={keywords} onChange={setKeywords} />
    </div>
  );
}

Filters.propTypes = {
  keywords: PropTypes.string.isRequired,
  setKeywords: PropTypes.func.isRequired
};

export default Filters;
