import { useSelector } from "react-redux"
import AllSetlist from "../Tables/Setlists";
import OpenModalButton from "../OpenModalButton";
import CreateSetlistModal from "./CreateSetlistModal";

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
    // console.log("this is the sessionUser ========> ", userSetlists);
    return (
        <div className="user-setlists">
            <h1>My Setlists</h1>
            <OpenModalButton modalComponent={<CreateSetlistModal />} type="create-setlist"/>
            <AllSetlist userSetlists={userSetlists} type="user" />
        </div>

    )
}
