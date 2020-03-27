import React from 'react';
import ReactDOM from 'react-dom';
import OuterCounter from './../../outer-counter/outer-counter.component';

import { render, cleanup, fireEvent } from '@testing-library/react';
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

describe('State is managed correctly', () => {
    it('count starts at 0', () => {
        const { getByTestId } = render(<OuterCounter />)
        expect(getByTestId('outerCount').textContent).toBe("0");
    })

    it('should add 1 to count', () => {
        const { getByText, getByTestId } = render(<OuterCounter />)
        fireEvent.click(getByText('ADD'));
        const count = getByTestId('outerCount');
        expect(count).toHaveTextContent("1");
    })
    
    it('should minus 1 from count', () => {
        const { getByText, getByTestId } = render(<OuterCounter />)
        fireEvent.click(getByText('REMOVE'));
        const count = getByTestId('outerCount');
        expect(count).toHaveTextContent("-1");
    })
})
