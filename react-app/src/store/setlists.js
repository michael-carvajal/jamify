const ALL_SETLISTS = "setlists/ALL_SETLISTS"
const DELETE_SETLIST = "setlists/DELETE_SETLIST"
const POST_SETLIST = "setlists/CREATE_SETLIST"
const ADD_SETLIST_ITEM = "setlists/ADD_SETLIST_ITEM"
// const PUT_SETLIST = "setlists/PUT_SETLIST"

const allSetlists = obj => {
    return {
        type: ALL_SETLISTS,
        obj
    }
}
const addSetlistItem = item => {
    return {
        type: ADD_SETLIST_ITEM,
        item
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
// const updateSetlist = list => {
//     return {
//         type: PUT_SETLIST,
//         list
//     }
// }

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
export const postSetlistItem = (item) => async (dispatch) => {
    const response = await fetch(`/api/setlists/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify(item)
    })
    const newSetlistItem = await response.json()
    console.log(newSetlistItem);
    dispatch(addSetlistItem(newSetlistItem))
}

export const putSetlist = (setlist, id) => async (dispatch) => {
    const response = await fetch(`/api/setlists/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify(setlist)
    })
    const updatedSetlist = await response.json()
    console.log(updatedSetlist);
    dispatch(addSetlist(updatedSetlist))
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
            return { ...state, Setlists: addedList }
            case ADD_SETLIST_ITEM:
                const addedItem = {...state.Setlist_items, [action.item.id] : action.item}
                return { ...state, Setlist_items: addedItem }

        default:
            return state;
    }
}
