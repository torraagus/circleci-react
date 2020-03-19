import React from 'react';
import ReactDOM from 'react-dom';
import InnerCounter from './../../inner-counter/inner-counter.component';

import { render } from '@testing-library/react';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InnerCounter></InnerCounter>, div);
})