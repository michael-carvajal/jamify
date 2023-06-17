import { useSelector } from "react-redux"
import AllSongsheets from "../Tables/AllSongsheets";

export default function UserSongsheets() {
    const { songsheets } = useSelector(state => state)
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {
        return (
            <h1>Sign in to create Songsheets!</h1>
        )
    }
    const { Songsheets} = songsheets
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>
    }
    const userSongsheets = Object.values(Songsheets).filter(song => song.author_id === sessionUser.id)
    console.log("this is the sessionUser ========> ", userSongsheets);
    return (
        <div className="user-songsheets">
            <h1>My Songsheets</h1>
            <AllSongsheets userSongsheets={userSongsheets} type="user" />
        </div>

    )
}
