import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "../Navigation/ProfileButton";
import "./sidebar.css"
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
export default function Sidebar({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser);
    return (
        <div className="side-bar">
            {!sessionUser && (
                <div className="user-login-signup">
                    <OpenModalButton type="signup" modalComponent={<SignupFormModal />} />
                    <OpenModalButton type="login"  modalComponent={<LoginFormModal/>}/>
                </div>

            )}
            <NavLink to="/user/songsheets">My Songsheets</NavLink>
            <NavLink to="/user/setlists">My Setlists</NavLink>
            {
                isLoaded && (
                    <li>
                        <ProfileButton user={sessionUser} />
                    </li>
                )
            }
            <div className="about">
                <i className="fa fa-github">github</i>
            </div>
        </div>
    )
}
