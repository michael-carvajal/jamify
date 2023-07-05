// constants
const GET_DEMOS = "session/GET_DEMOS";
const POST_DEMO = "session/POST_DEMO";


const getDemos = (demos) => ({
    type: GET_DEMOS,
    demos
});
const addDemo = (demo) => ({
    type: POST_DEMO,
    demo
});




export const fetchDemos = () => async (dispatch) => {
    const response = await fetch('/api/demos')
    const demos = await response.json()

    dispatch(getDemos(demos))
}
export const postDemo = (demo) => async (dispatch) => {
    console.log('logging form data in reducer ==========>',demo);
    const response = await fetch('/api/aws/demo', {
        method: "POST",
        body : demo
    })
    const newDemo = await response.json()

    dispatch(addDemo(newDemo))
}



const initialState = { };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DEMOS:
            return { ...state, ...action.demos };
        case POST_DEMO:
            const addedDemo = { ...state.demos, [action.demo.id]: action.demo }
            return { ...state, addedDemo}
        default:
            return state;
    }
}