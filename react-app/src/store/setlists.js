const ALL_SETLISTS = "setlists/ALL_SETLISTS"
const DELETE_SETLIST = "setlists/DELETE_SETLIST"
const POST_SETLIST = "setlists/CREATE_SETLIST"

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
const addSetlist = list => {
    return {
        type: POST_SETLIST,
        list
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
export const postSetlist = (setlist) => async (dispatch) => {
    const response = await fetch(`/api/setlists`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify(setlist)
    })
    const newSetlist = await response.json()
    console.log(newSetlist);
    dispatch(addSetlist(newSetlist))
}


const initialState = {}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_SETLISTS:
            return action.obj
        case DELETE_SETLIST:
            const { [action.id]: removedSetlist, ...newSetlist } = state.Setlists
            return { ...state, Setlists: newSetlist }
        case POST_SETLIST:
            const addedList = {...state.Setlists, [action.list.id] : action.list}
            return {...state , Setlists : addedList}
        default:
            return state;
    }
}
