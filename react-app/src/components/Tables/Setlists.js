import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function AllSetlist({ type, userSetlists }) {
    const { setlists } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;
    if (!Setlists) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const setlistsArray = Object.values(Setlists);
    const listItems = Object.values(Setlist_items);

    const setlistMapper = type === "user" ? userSetlists : setlistsArray;
    return (
        <div id="table-container">
            <h1>Setlists</h1>
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>LAST UPDATED</th>
                        <th>SONGSHEETS</th>
                    </tr>
                </thead>
                <tbody>
                    {setlistMapper.map((setlist, index) => {
                        // const artistId = setlist.artist_id;
                        const listLength = listItems.filter(list => list.setlist_id === setlist.id).length
                        const dateSplit = setlist.created_at.split(" ")
                        // console.log(dateSplit[1]);
                        return (
                            <tr className="table-row" key={`setlist-list-${index}`}>
                                <td>
                                    <NavLink to={`/setlist-detail/${setlist.id}`}>{setlist.name}</NavLink>
                                </td>
                                <td>{setlist.description}</td>
                                <td>{`${dateSplit[1]} ${dateSplit[2]} ${dateSplit[3]}`}</td>
                                <td>{listLength}</td>

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
