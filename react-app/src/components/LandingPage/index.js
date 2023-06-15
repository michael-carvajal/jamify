import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function LandingPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="landing-page">
            <h1>landing page</h1>
        </div>
    )
}
