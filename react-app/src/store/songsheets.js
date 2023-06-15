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
