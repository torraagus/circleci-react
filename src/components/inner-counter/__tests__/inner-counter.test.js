import React from 'react';
import ReactDOM from 'react-dom';
import InnerCounter from './../../inner-counter/inner-counter.component';

//import { render, cleanup, fireEvent } from 'test-utils';
import {render, fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
//import userEvent from "@testing-library/user-event";

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

describe('State is managed correctly', () => {
    it('count starts at 0', () => {
        const { getByTestId } = render(<InnerCounter counter={0}></InnerCounter>)
        expect(getByTestId('count').textContent).toBe("0");
    })

    it('should add 1 to count', () => {
        const click = jest.fn();
        const { getByTestId } = render(<InnerCounter onCounterChange={click} counter={0}></InnerCounter>)
        fireEvent.click(getByTestId('addCount'));
        const count = getByTestId('count');
        //expect(count).toHaveTextContent("1");
        console.log(count.innerText);
        expect(click).toHaveBeenCalledTimes(1);
    })
    
    it('should minus 1 from count', () => {
        const click = jest.fn();
        const { getByTestId } = render(<InnerCounter onCounterChange={click} counter={0}></InnerCounter>)
        fireEvent.click(getByTestId('minusCount'));
        //fireEvent.click(getByTestId('minusCount'));
        const count = getByTestId('count');
        //expect(count).toHaveTextContent("-1");
        console.log(count.innerText);
        expect(click).toHaveBeenCalledTimes(1);
    })
})

