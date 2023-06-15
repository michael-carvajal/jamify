import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Songsheets() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="all-songsheets">
            <h1>All Songsheets test test</h1>
        </div>
    )
}
