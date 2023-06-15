const ALL_SONGSHEETS = "songsheets/ALL_SONGSHEETS"

const allSongsheets = obj => {
    return {
        type: ALL_SONGSHEETS,
        obj
    }
}

export const fetchAllSongsheets = () => async (dispatch) => {
    const response  = await fetch("/api/songsheets")
    const obj = await response.json()
    console.log(obj);
    dispatch(allSongsheets(obj))
}
const initialState = {}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_SONGSHEETS:
            return action.obj
        default:
            return state;
    }
}
