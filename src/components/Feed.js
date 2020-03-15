import React from 'react';

import VacanciesContainer from '../containers/VacanciesContainer';
import PaginationContainer from '../containers/PaginationContainer';

export default function Feed() {
  return (
    <div>
      <VacanciesContainer />
      <PaginationContainer />
    </div>
  );
}
