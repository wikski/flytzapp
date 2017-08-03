import moment from 'moment'

import config from './../config'

function fetchTimelineIsLoading(bool){

    return {
        type: 'TIMELINE_IS_LOADING',
        isLoading: bool
    }
}

function fetchTimelineData(items){

    return {
        type: 'FETCH_TIMELINE',
        items
    }
}

export function updateTimeline(index){

    return {
        type: 'UPDATE_TIMELINE',
        index
    }
}

export function fetchTimeline(){

    return dispatch => {

        dispatch(fetchTimelineIsLoading(true))

        fetch(config.api + '/timeline')
            .then(res => res.json())
            .then(timeline => {

                dispatch(fetchTimelineData(timeline))
                dispatch(fetchTimelineIsLoading(false))

            }).catch(err => {

                console.log(err)
                dispatch(fetchTimelineIsLoading(false))
            })


    }
}