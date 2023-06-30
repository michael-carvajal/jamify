// constants
const GET_DEMOS = "session/GET_DEMOS";


const getDemos = (demos) => ({
    type: GET_DEMOS,
    payload: demos,
});



export const fetchDemos = () => async (dispatch) => {
    const response = await fetch('/api/demos')
    const demos = await response.json()

    getDemos(demos)
}



const initialState = { };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DEMOS:
            return { ...state, ...action.demos };
        default:
            return state;
    }
}
