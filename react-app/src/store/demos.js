// constants
const GET_DEMOS = "session/GET_DEMOS";
const POST_DEMO = "session/POST_DEMO";
const DELETE_DEMO = "session/DELETE_DEMO";


const getDemos = (demos) => ({
    type: GET_DEMOS,
    demos
});
const addDemo = (demo) => ({
    type: POST_DEMO,
    demo
});
const removeDemo = (demo) => ({
    type: DELETE_DEMO,
    demo
});




export const fetchDemos = () => async (dispatch) => {
    const response = await fetch('/api/demos')
    const demos = await response.json()

    dispatch(getDemos(demos))
}
export const postDemo = (demo) => async (dispatch) => {
    const response = await fetch('/api/aws/demo', {
        method: "POST",
        body: demo
    })
    const newDemo = await response.json()

    await dispatch(addDemo(newDemo))
}
export const deleteDemo = (demo) => async (dispatch) => {
    const response = await fetch(`/api/aws/demo/${demo.id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demo)
    })
    const deletedDemo = await response.json()

    await dispatch(removeDemo(deletedDemo))
}



const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DEMOS:
            return { ...state, ...action.demos };
        case POST_DEMO:
            const addedDemo = { ...state, [action.demo.id]: action.demo }
            return addedDemo
        case DELETE_DEMO:
            const { [action.demo.id]: deletedDemo, ...newState } = state;
            return newState;


        default:
            return state;
    }
}
