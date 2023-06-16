import { useSelector } from "react-redux";

export default function allSetlist({ type, userSetlists }) {
    const { setlists } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;
    if (!Setlists) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const setlistsArray = Object.values(Setlists);

    const setlistMapper = type === "user" ? userSetlists : setlistsArray;
    return (
        <div id="table-container">
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
                        return (
                            <tr className="table-row" key={`setlist-list-${index}`}>
                                <td>{Artists[artistId].name}</td>
                                <td>
                                    <NavLink to={`/setlist-detail/${setlist.id}`}>{setlist.title}</NavLink>
                                </td>
                                <td>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </td>
                                <td>50</td>
                                {type === "user" ? (
                                    <td className="delete-stock">
                                        <OpenModalButton
                                            type="delete-setlist"
                                            modalComponent={<DeleteSetlistModal setlistId={setlist.id} />}
                                        />
                                        <NavLink to={`/publish/${setlist.id}`}><i className="fa fa-pen"></i></NavLink>
                                    </td>
                                ) : null}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
