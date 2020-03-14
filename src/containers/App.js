import React from 'react';


import Search from '../containers/Search';
import Filters from '../containers/Filters';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import axios from 'axios'

export default function App() {
  window.axios = axios;
	return (
		<div className='app'>
			<CssBaseline />
			<Container maxWidth="lg">
				<div style={{ padding: 20 }}>
					<Filters />
				</div>
				<div style={{ padding: 20 }}>
        	<Search />
				</div>
			</Container>
		</div>
	);
}
