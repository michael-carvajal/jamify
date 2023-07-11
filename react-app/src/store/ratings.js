// constants
const GET_RATINGS = "ratings/GET_RATINGS";
// const POST_DEMO = "ratings/POST_DEMO";
// const DELETE_DEMO = "ratings/DELETE_DEMO";


const getRatings = (ratings) => ({
    type: GET_RATINGS,
    ratings
});
// const addDemo = (demo) => ({
//     type: POST_DEMO,
//     demo
// });
// const removeDemo = (demo) => ({
//     type: DELETE_DEMO,
//     demo
// });




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
// export const deleteDemo = (demo) => async (dispatch) => {
//     const response = await fetch(`/api/aws/demo/${demo.id}`, {
//         method: "DELETE",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(demo)
//     })
//     const deletedDemo = await response.json()

//     await dispatch(removeDemo(deletedDemo))
// }



const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RATINGS:
            return { ...state, ...action.ratings };
        // case POST_DEMO:
        //     const addedDemo = { ...state, [action.demo.id]: action.demo }
        //     return addedDemo
        // case DELETE_DEMO:
        //     const { [action.demo.id]: deletedDemo, ...newState } = state;
        //     return newState;


        default:
            return state;
    }
}
