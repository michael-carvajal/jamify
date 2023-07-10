const ALL_SONGSHEETS = "songsheets/ALL_SONGSHEETS"
const DELETE_SONGSHEET = "songsheets/DELETE_SONGSHEET"
const POST_SONGSHEET = "songsheets/POST_SONGSHEET"
const PUT_SONGSHEET = "songsheets/PUT_SONGSHEET"
const ADD_ALBUM = "songsheets/ADD_ALBUM"
const ADD_ARTIST = "songsheets/ADD_ARTIST"
const ADD_GENRE = "songsheets/ADD_GENRE"

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
const addAlbum = obj => {
    return {
        type: ADD_ALBUM,
        obj
    }
}
const addArtist = obj => {
    return {
        type: ADD_ARTIST,
        obj
    }
}
const addGenre = obj => {
    return {
        type: ADD_GENRE,
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
    const response = await fetch("/api/songsheets")
    const obj = await response.json()
    dispatch(allSongsheets(obj))
}
export const DeleteSongsheet = (sheetId) => async (dispatch) => {
    const response = await fetch(`/api/songsheets/${sheetId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    const songDeleted = await response.json()
    dispatch(removeSongsheet(sheetId))
}
export const postSongsheet = (newSongsheet) => async (dispatch) => {
    const response = await fetch(`/api/songsheets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSongsheet)
    })
    const songCreated = await response.json()
    dispatch(addSongsheet(songCreated))
}
export const postAssociations = (obj) => async (dispatch) => {
    const response = await fetch(`/api/songsheets/${obj.type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    })
    const AssociationCreated = await response.json()
    switch (obj.type) {
        case 'Artist':
            dispatch(addArtist(AssociationCreated))
            break;
        case 'Genre':
            dispatch(addGenre(AssociationCreated))

            break;
        case 'Album':
            dispatch(addAlbum(AssociationCreated))

            break;

        default:
            break;
    }
}
export const putSongsheet = (obj, id) => async (dispatch) => {
    const response = await fetch(`/api/songsheets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    })
    const songUpdated = await response.json()
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
        case ADD_ARTIST:
            const addArtist = { ...state.Artists, [action.obj.id]: action.obj }
            return {...state, Artists: addArtist}
        case ADD_GENRE:
            const addGenre = { ...state.Genres, [action.obj.id]: action.obj }
            return {...state, Genres: addGenre}
        case ADD_ALBUM:
            const addAlbum = { ...state.Albums, [action.obj.id]: action.obj }
            return {...state, Albums: addAlbum}
        default:
            return state;
    }
}
