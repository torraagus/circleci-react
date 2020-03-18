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
        this.setState((state) => ({
            counter: state.counter + number 
        }));
        this.props.onCounterChange(number);
    }

    render() {
        return (
            <Grid fluid className="grid-counter-inner">
                <Row end="xs">
                    <Col lg={6} md={8} sm={10} xs={12}>
                        <h4 className="counterName">Inner counter</h4>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <button
                            className="increaseBtnSmall"
                            onClick={() => {
                                this.changeCounter(1);
                            }}
                            >
                        {'+'}
                        </button>
                    </Col>
                    <Col className="counter-inner">
                        {this.props.counter}
                    </Col>
                    <Col>
                        <button
                            className="decreaseBtnSmall"
                            onClick={() => {
                                this.changeCounter(-1);
                            }}
                        >
                        {'-'}
                        </button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
