import React, { Component } from 'react'
import InnerCounter from './../inner-counter/inner-counter.component';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './outer-counter.scss';

export default class OuterCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.changeCounter.bind(this);
    }

    changeCounter(number) {
        this.setState((state) => ({
            counter: state.counter + number 
        }));
    }

    render() {
        return (
            <Grid fluid className="grid-counter-outer">
                <Row end="xs">
                    <Col lg={6} md={8} sm={10} xs={12}>
                        <h4 className="counterName">Outer counter</h4>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col lg={6} md={8} sm={10} xs={12}>
                        <InnerCounter counter={this.state.counter}></InnerCounter>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col lg={6} md={8} sm={10} xs={12}>
                        <h4 className="counter-outer">{this.state.counter}</h4>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <button
                            className="increaseBtn"
                            onClick={() => {
                                this.changeCounter(1);
                            }}
                        >
                        {'ADD'}
                        </button>
                    </Col>
                    <Col>
                        <button
                            className="decreaseBtn"
                            onClick={() => {
                                this.changeCounter(-1);
                            }}
                        >
                        {'REMOVE'}
                        </button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
