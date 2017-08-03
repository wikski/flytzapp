import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import Loader from './../loaders/loader.timeline'

const StyledTimeline = styled.div`
    background-color: #f7f5f5;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;

    > div {
        margin: 0 auto;
        max-width: 320px;
        width: 100%;

        h2 {
            color: #afa6a6;
            font-size: 20px;
            margin: 0;

            span {
                color: #7b7a7a;
            }
        }

        > a {
            display: inline-block;
            line-height: 22px;
        }
    }
`

const TimelineComponent = props => {

    const renderWeekend = props => {

        if(props.timeline.items){

            if(props.timeline.items.length){

                const weekend = props.timeline.items.filter(item => item.active)[0]

                return (<h2>Weekend of <span>{ weekend.friday } - { weekend.sunday }</span></h2>)
            }
        }
    }

    const updateTimeline = (e, direction) => {

        e.preventDefault()

        props.updateTimeline(direction)
    }

    return (
        <StyledTimeline className="text-center">
            <div>
                <Loader isLoading={props.timeline.isLoading}/>
                <a className="pull-left" href onClick={(e)=>{updateTimeline(e, 'prev')}}><FontAwesome name={`arrow-left`}/></a>
                <a className="pull-right" href onClick={(e)=>{updateTimeline(e, 'next')}}><FontAwesome name={`arrow-right`}/></a>
                { renderWeekend(props) }
            </div>
        </StyledTimeline>
    )
}

TimelineComponent.PropTypes = {
    timeline: PropTypes.array.isRequired,
    updateTimeline: PropTypes.func.isRequired
}

export default TimelineComponent