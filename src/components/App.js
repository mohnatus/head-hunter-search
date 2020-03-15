import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import FiltersContainer from '../containers/FiltersContainer';
import Feed from './Feed';

export default function App() {
  return (
    <div className='app'>
      <CssBaseline />
      <Container maxWidth='lg'>
        <div style={{ padding: 20 }}>
          <FiltersContainer />
        </div>
        <div style={{ padding: 20 }}>
          <Feed />
        </div>
      </Container>
    </div>
  );
}
