import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./landingpage.css"
export default function LandingPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { songsheets } = useSelector(state => state)
    const { Songsheets, Artists, Albums } = songsheets
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>
    }
     const songsheetsArray = Object.values(Songsheets)


    return (
        <div className="landing-page">
            <h1>Welcome to Jamify</h1>
            <div className="recently-published">

            </div>
        </div>
    )
}
