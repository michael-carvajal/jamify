import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "../Navigation/ProfileButton";
import "./sidebar.css";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
import { useEffect, useState } from "react";

export default function Sidebar({ isLoaded }) {
    const [isLoading, setIsLoading] = useState(true); // State to track loading status
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false); // Set loading status to false after one second
        }, 1000);

        return () => clearTimeout(loadingTimeout); // Clear the timeout on unmounting
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container" id="sidebar-loader">
                <img src="/les-paul.svg" alt="guitar spinning" id="guitar-spin" />
            </div>
        );
    }

    return (
        <div className="side-bar">
            {!sessionUser && (
                <div className="user-login-signup">
                    <OpenModalButton type="signup" modalComponent={<SignupFormModal />} />
                    <OpenModalButton type="login" modalComponent={<LoginFormModal />} />
                </div>
            )}
            <NavLink className="text-xs md:text-base" to="/user/songsheets">My Songsheets</NavLink>
            <NavLink className="text-xs md:text-base" to="/user/setlists">My Setlists</NavLink>
            <NavLink className="text-xs md:text-base" to="/user/demos">My Demos</NavLink>
            <NavLink className="text-xs md:text-base" to="/user/reviews">My Reviews</NavLink>

            {sessionUser && (
                <li className="self-center my-8">
                    <ProfileButton user={sessionUser} />
                </li>
            )}
            <div className="text-2xl md:text-5xl flex justify-between mt-auto">
                <a target= "_blank" href="https://github.com/michael-carvajal">
                    <i className="fa fa-github"></i>
                </a>
                <a target= "_blank" href="https://www.linkedin.com/in/michael-carvajal-326683203/">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}
