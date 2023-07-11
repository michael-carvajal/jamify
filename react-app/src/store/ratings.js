// constants
const GET_RATINGS = "ratings/GET_RATINGS";
// const POST_DEMO = "ratings/POST_DEMO";
const DELETE_RATING = "ratings/DELETE_RATING";


const getRatings = (ratings) => ({
    type: GET_RATINGS,
    ratings
});
// const addDemo = (demo) => ({
//     type: POST_RATING,
//     demo
// });
const removeRating = (ratingId) => ({
    type: DELETE_RATING,
    ratingId
});




export const fetchRatings = () => async (dispatch) => {
    const response = await fetch('/api/ratings')
    const ratings = await response.json()

    dispatch(getRatings(ratings))
}
// export const postDemo = (demo) => async (dispatch) => {
//     const response = await fetch('/api/aws/demo', {
//         method: "POST",
//         body: demo
//     })
//     const newDemo = await response.json()

//     await dispatch(addDemo(newDemo))
// }
export const deleteRating = (ratingId) => async (dispatch) => {
    const response = await fetch(`/api/ratings/${ratingId}`, {
        method: "DELETE",
    })
    const deletedRating = await response.json()

    await dispatch(removeRating(deletedRating.id))
}



const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RATINGS:
            return { ...state, ...action.ratings };
        // case POST_DEMO:
        //     const addedDemo = { ...state, [action.demo.id]: action.demo }
        //     return addedDemo
        case DELETE_RATING:
            const { [action.ratingId]: deletedRating, ...newState } = state;
            return newState;


        default:
            return state;
    }
}
