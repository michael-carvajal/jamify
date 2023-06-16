const ALL_SONGSHEETS = "songsheets/ALL_SONGSHEETS"
const DELETE_SONGSHEET = "songsheets/DELETE_SONGSHEET"
const POST_SONGSHEET = "songsheets/POST_SONGSHEET"
const PUT_SONGSHEET = "songsheets/PUT_SONGSHEET"

const allSongsheets = obj => {
    return {
        type: ALL_SONGSHEETS,
        obj
    }
}
const addSongsheet = obj => {
    return {
        type: POST_SONGSHEET,
        obj
    }
}
const updateSongsheet = obj => {
    return {
        type: PUT_SONGSHEET,
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
export const postSongsheet = (newSongsheet) => async (dispatch) => {
    console.log(newSongsheet);
    const response = await fetch(`/api/songsheets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSongsheet)
    })
    const songCreated = await response.json()
    console.log(songCreated);
    dispatch(addSongsheet(songCreated))
}
export const putSongsheet = (obj, id) => async (dispatch) => {
    console.log(obj);
    const response = await fetch(`/api/songsheets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    })
    const songUpdated = await response.json()
    console.log(songUpdated);
    dispatch(updateSongsheet(songUpdated))
}
const initialState = {}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_SONGSHEETS:
            return action.obj
        case DELETE_SONGSHEET:
            const { [action.sheetId]: removedSongsheet, ...newSongsheets } = state.Songsheets;
            return { ...state, Songsheets: newSongsheets }
        case POST_SONGSHEET:
            const addSongsheet = { ...state.Songsheets, [action.obj.id]: action.obj }
            return { ...state, Songsheets: addSongsheet }
            case PUT_SONGSHEET:
                const updatedSongsheet = { ...state.Songsheets, [action.obj.updated.id]: action.obj.updated }
                return { ...state, Songsheets: updatedSongsheet }

        default:
            return state;
    }
}
