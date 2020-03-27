import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './inner-counter.scss';

export default class InnerCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter
        };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.changeCounter = this.changeCounter.bind(this);
    }

    changeCounter(number) {
        this.setState((state, props) => ({
            counter: state.counter + number
        }));
        this.props.onCounterChange(number);
    }

    render() {
        return (
            <Grid fluid className="grid-counter-inner">
                <Row center="xs">
                    <Col className="p-0" xs={12}>
                        <h4 className="counterName-inner p-2 mb-0">Inner Counter</h4>
                    </Col>
                </Row>
                <Row between="xs">
                    <Col>
                        <button
                            data-testid="addCount"
                            className="increaseBtnSmall"
                            onClick={() => {
                                this.changeCounter(1);
                            }}
                            >
                        +
                        </button>
                    </Col>
                    <Col className="counter-inner">
                        <p data-testid="count">{this.props.counter}</p>
                    </Col>
                    <Col>
                        <button
                            data-testid="minusCount"
                            className="decreaseBtnSmall"
                            onClick={() => {
                                this.changeCounter(-1);
                            }}
                        >
                        -
                        </button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
