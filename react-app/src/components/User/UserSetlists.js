import { useSelector } from "react-redux"
import AllSetlist from "../Tables/Setlists";

export default function UserSetlists() {
    const { setlists } = useSelector(state => state)
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {
        return (
            <h1>Sign in to create Setlists!</h1>
        )
    }
    const { Setlists } = setlists
    if (!Setlists) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>
    }
    const userSetlists = Object.values(Setlists).filter(list => list.author_id === sessionUser.id)
    return (
        <div className="user-setlists">

            <AllSetlist userSetlists={userSetlists} type="user" />
        </div>

    )
}
