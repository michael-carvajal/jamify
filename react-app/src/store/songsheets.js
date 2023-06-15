const ALL_SONGSHEETS = "songsheets/ALL_SONGSHEETS"
const DELETE_SONGSHEET = "songsheets/DELETE_SONGSHEET"

const allSongsheets = obj => {
    return {
        type: ALL_SONGSHEETS,
        obj
    }
}
const removeSongsheet = sheetId => {
    return {
        type: DELETE_SONGSHEET,
        sheetId
    }
}

export const fetchAllSongsheets = () => async (dispatch) => {
    const response  = await fetch("/api/songsheets")
    const obj = await response.json()
    console.log(obj);
    dispatch(allSongsheets(obj))
}
export const DeleteSongsheet = (sheetId) => async (dispatch) => {
    const response = await fetch(`/api/songsheets/${sheetId}`, {
        method: "DELETE",
        headers: {"Content-Type" : "application/json"}
    })
    const songDeleted = await response.json()
    console.log(songDeleted);
    dispatch(removeSongsheet(sheetId))
}
const initialState = {}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_SONGSHEETS:
            return action.obj
        case DELETE_SONGSHEET:
            const { [action.sheetId]: removedSongsheet, ...newSongsheets } = state.Songsheets;
            return {...state.Artists, ...state.Albums, Songsheets: newSongsheets}
        default:
            return state;
    }
}
