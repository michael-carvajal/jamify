import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "../Navigation/ProfileButton";
import "./sidebar.css"
export default function Sidebar({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="side-bar">
            <NavLink to="/user/songsheets">My Songsheets</NavLink>
            <NavLink to="/user/setlists">My Setlists</NavLink>
            {
                isLoaded && (
                    <li>
                        <ProfileButton user={sessionUser} />
                    </li>
                )
            }
        </div>
    )
}
