// constants
const GET_RATINGS = "ratings/GET_RATINGS";
const POST_RATING = "ratings/POST_RATING";
const DELETE_RATING = "ratings/DELETE_RATING";


const getRatings = (ratings) => ({
    type: GET_RATINGS,
    ratings
});
const addRating = (rating) => ({
    type: POST_RATING,
    rating
});
const removeRating = (ratingId) => ({
    type: DELETE_RATING,
    ratingId
});




export const fetchRatings = () => async (dispatch) => {
    const response = await fetch('/api/ratings')
    const ratings = await response.json()

    dispatch(getRatings(ratings))
}

export const postRating = (rating) => async (dispatch) => {
    const response = await fetch('/api/ratings', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(rating)
    })

    const newRating = await response.json()

    await dispatch(addRating(newRating))
}

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
        case POST_RATING:
            const addedRating = { ...state, [action.rating.id]: action.rating }
            return addedRating
        case DELETE_RATING:
            const { [action.ratingId]: deletedRating, ...newState } = state;
            return newState;


        default:
            return state;
    }
}
