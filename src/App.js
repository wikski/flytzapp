import React from 'react'
import {
    Col,
    Grid,
    Image,
    Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import Timeline from './components/timeline/timeline.component'
import { fetchTimeline, updateTimeline } from './actions/actions'

class App extends React.Component {

    constructor(){

        super()

        this.state = {
            destinations: [
                {
                    name: 'Prague',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Berlin',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Lisbon',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Budapest',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Barcelona',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Paris',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Amsterdam',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Rome',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Venice',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Salzberg',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Nice',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Oslo',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Istanbul',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Tallin',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Bruge',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Vienna',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Dubrovnik',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                },
                {
                    name: 'Zurich',
                    carousel: {
                        index: 0,
                        direction: null
                    }
                }
            ]
        }

        this.updateTimeline = this.updateTimeline.bind(this)
    }

    componentWillMount(){

        this.props.fetchTimeline()
    }

    updateTimeline(direction){

        let index = this.props.timeline.activeIndex

        if(typeof direction === 'string'){

            if(direction === 'next'){

                if(this.props.timeline.activeIndex === this.props.timeline.items.length - 1){
                    // if we're at the end

                    console.log('at the end')

                } else {

                    index = this.props.timeline.activeIndex + 1
                }

            } else if(direction === 'prev'){

                if(this.props.timeline.activeIndex === 0){
                    // we're at the start

                    console.log('at teh start')

                } else {

                    index = this.props.timeline.activeIndex - 1
                }
            }
        }

        if(index !== this.props.timeline.activeIndex){

            this.props.updateTimeline(index)
        }
    }

    renderTiles(){

        return this.state.destinations.map((item, i) => {
            return (
                <Col className="text-center" key={`tile-${i}`}xs={12} sm={6} md={4} lg={3}>
                    <ul role="tablist" className="margin-top-triple nav nav-tabs">
                        <li role="presentation">
                            <a
                                id=""
                                role="tab"
                                aria-controls=""
                                tabIndex="-1"
                                aria-selected="false"
                                href>
                                <small>Thu {Math.round(Math.random() * (10 - 5) + 5, 2)}pm - Sun {Math.round(Math.random() * (9 - 1) + 1, 2)}pm £{Math.round(Math.random() * (150 - 35) + 35, 2)}</small>
                            </a>
                        </li>
                        <li className="active" role="presentation">
                            <a
                                id=""
                                role="tab"
                                aria-controls=""
                                tabIndex="-1"
                                aria-selected="true"
                                href>
                                <small>Fri {Math.round(Math.random() * (10 - 5) + 5, 2)}pm - Sun {Math.round(Math.random() * (9 - 1) + 1, 2)}pm £{Math.round(Math.random() * (150 - 35) + 35, 2)}</small>
                            </a>
                        </li>
                    </ul>
                    <Image responsive src={`http://via.placeholder.com/500x450&text=${item.name}`} thumbnail/>
                </Col>
            )
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Timeline timeline={this.props.timeline} updateTimeline={this.updateTimeline}/>
                <BrowserRouter>
                    <div>
                        <Grid fluid>
                            <Row>
                                { this.renderTiles() }
                            </Row>
                        </Grid>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        timeline: state.timeline
    }
}

const mapDispatchToProps = dispatch => {

    return {
        fetchTimeline: () => { dispatch(fetchTimeline()) },
        updateTimeline: (index) => { dispatch(updateTimeline(index)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
