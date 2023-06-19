import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import DeleteSetlistModal from "../User/DeleteSetlistModal";
import CreateSetlistModal from "../User/CreateSetlistModal";
import { postSetlistItem } from "../../store/setlists";

export default function AllSetlist({ type, songId}) {
    const { setlists } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {
        return (
            <h1>Sign in to add Songsheet to Setlists!</h1>
        )
    }

    const userSetlists = Object.values(Setlists).filter(list => list.author_id === sessionUser.id)


    if (!Setlists) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const setlistsArray = Object.values(Setlists);
    const listItems = Object.values(Setlist_items);

    const setlistMapper = type === "user" || type === 'add' ? userSetlists : setlistsArray;
    // console.log(userSetlists);
    const handleAdd = (setlist_id) => {
        const item = {
            setlist_id,
            songsheet_id : songId
        }
        dispatch(postSetlistItem(item))
    }
    return (
        <div id="table-container">
            <h1>Setlists</h1>
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                       { type === "add" ? null : <th>DATE</th>}
                        <th>SONGSHEETS</th>
                    </tr>
                </thead>
                <tbody>
                    {setlistMapper.map((setlist, index) => {
                        // const artistId = setlist.artist_id;
                        const lists = listItems.filter(list => list.setlist_id === setlist.id)
                        const listLength = lists.length
                        const dateSplit = setlist.created_at.split(" ")
                        let isInList = false;
                        lists.forEach(list => {
                            if (list.songsheet_id === songId) {
                                isInList = true
                            }
                        })
                        console.log(isInList);
                        return (
                            <tr className="table-row" key={`setlist-list-${index}`}>
                                <td>
                                    <NavLink to={`/setlist-detail/${setlist.id}`}>{setlist.name}</NavLink>
                                </td>
                                <td>{setlist.description}</td>
                               {type ==="add" ? null : <td>{`${dateSplit[1]} ${dateSplit[2]} ${dateSplit[3]}`}</td>}
                                <td>{listLength}</td>
                                {type === "user" ? (
                                    <td className="delete-stock">
                                        <OpenModalButton
                                            type="delete-setlist"
                                            modalComponent={<DeleteSetlistModal listId={setlist.id} />}
                                        />
                                        <OpenModalButton type="edit-setlist" modalComponent={<CreateSetlistModal type="edit" id={setlist.id} />}/>
                                    </td>
                                ) : null}
                                <td>{isInList ? <i className="fa fa-check"></i> : <i className="fa fa-plus" onClick={() => handleAdd(setlist.id)}></i>}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

// {
//     type === "user" ? (
//         <td className="delete-stock">
//             <OpenModalButton
//                 type="delete-setlist"
//                 modalComponent={<DeleteSetlistModal setlistId={setlist.id} />}
//             />
//             <NavLink to={`/publish/${setlist.id}`}><i className="fa fa-pen"></i></NavLink>
//         </td>
//     ) : null
// }
