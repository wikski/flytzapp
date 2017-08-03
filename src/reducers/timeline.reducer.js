export function timeline(state = { activeIndex: 0, isLoading: false, items: [] }, action){

    switch(action.type){

        case 'TIMELINE_IS_LOADING' :

            return Object.assign({}, state, { isLoading: action.isLoading })

        case 'FETCH_TIMELINE' :

            return Object.assign({}, state, { items: action.items })

        case 'UPDATE_TIMELINE' :

            let newState = Object.assign({}, state)

            newState.items.map(item => {

                item.active = false

                return item
            })

            newState.activeIndex = action.index
            newState.items[newState.activeIndex].active = true

            return newState

        default :

            return state
    }
}