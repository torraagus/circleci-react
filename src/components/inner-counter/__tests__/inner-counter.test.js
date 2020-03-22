import React from 'react';
import ReactDOM from 'react-dom';
import InnerCounter from './../../inner-counter/inner-counter.component';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';

afterEach(cleanup);

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InnerCounter></InnerCounter>, div);
})

it('matches snapshot', () => {
    const tree = renderer.create(<InnerCounter counter="1"></InnerCounter>).toJSON();
    expect(tree).toMatchSnapshot();
})
