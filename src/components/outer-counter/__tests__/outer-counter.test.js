import React from 'react';
import ReactDOM from 'react-dom';
import OuterCounter from './../../outer-counter/outer-counter.component';

import { render } from '@testing-library/react';

it('should render component without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render(<OuterCounter></OuterCounter>, div);
})