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
                <img src="/les-paul.svg" alt="SVG Image" id="guitar-spin" />
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
            <NavLink to="/user/songsheets">My Songsheets</NavLink>
            <NavLink to="/user/setlists">My Setlists</NavLink>
            <NavLink to="/user/demos">My Demos</NavLink>

            {isLoaded && (
                <li>
                    <ProfileButton user={sessionUser} />
                </li>
            )}
            <div className="about">
                <a href="https://github.com/michael-carvajal">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/michael-carvajal-326683203/">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}
