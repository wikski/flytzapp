import React from 'react'

const LoaderTimelineComponent = props => {

    return (
        <div>
            { props.isLoading && 'loading' }
        </div>
    )
}

export default LoaderTimelineComponent