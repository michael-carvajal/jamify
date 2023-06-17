const ALL_SETLISTS = "setlists/ALL_SETLISTS"

const allSetlists = obj => {
    return {
        type: ALL_SETLISTS,
        obj
    }
}

export const fetchAllSetlists = () => async (dispatch) => {
    const response = await fetch("/api/setlists")
    const obj = await response.json()
    console.log(obj);
    dispatch(allSetlists(obj))
}


const initialState = {}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_SETLISTS:
            return action.obj
        default:
            return state;
    }
}
