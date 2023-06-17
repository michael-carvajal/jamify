const ALL_SETLISTS = "setlists/ALL_SETLISTS"
const DELETE_SETLIST = "setlists/DELETE_SETLIST"

const allSetlists = obj => {
    return {
        type: ALL_SETLISTS,
        obj
    }
}
const removeSetlist = id => {
    return {
        type: DELETE_SETLIST,
        id
    }
}

export const fetchAllSetlists = () => async (dispatch) => {
    const response = await fetch("/api/setlists")
    const obj = await response.json()
    console.log(obj);
    dispatch(allSetlists(obj))
}
export const DeleteSetlist = (id) => async (dispatch) => {
    const response = await fetch(`/api/setlists/${id}`, {
        method: "DELETE",
    })
    const deletedSetlist = await response.json()
    console.log(deletedSetlist);
    dispatch(removeSetlist(id))
}


const initialState = {}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_SETLISTS:
            return action.obj
        case DELETE_SETLIST:
            const { [action.id]: removedSetlist, ...newSetlist } = state.Setlists
            return { ...state, Setlists : newSetlist}
        default:
            return state;
    }
}
