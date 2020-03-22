import React from 'react';
import ReactDOM from 'react-dom';
import OuterCounter from './../../outer-counter/outer-counter.component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('should render component without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render(<OuterCounter></OuterCounter>, div);
})

it('matches snapshot', () => {
    const tree = renderer.create(<OuterCounter></OuterCounter>).toJSON();
    expect(tree).toMatchSnapshot();
})
