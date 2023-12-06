import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import DeleteSetlistModal from "../User/DeleteSetlistModal";
import CreateSetlistModal from "../User/CreateSetlistModal";
import { DeleteItem, postSetlistItem } from "../../store/setlists";
import "./setlists.css"
import { useModal } from "../../context/Modal";
export default function AllSetlist({ type, songId }) {
    const { setlists } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser && type === "add") {
        return (
            <h1>Sign in to add Songsheet to Setlists!</h1>
        )
    }



    if (!Setlists) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const userSetlists = Object.values(Setlists).filter(list => list.author_id === sessionUser?.id) || []
    const setlistsArray = Object.values(Setlists);
    const listItems = Object.values(Setlist_items);

    const setlistMapper = type === "user" || type === 'add' ? userSetlists : setlistsArray;
    const handleAdd = (setlist_id) => {
        const item = {
            setlist_id,
            songsheet_id: songId
        }
        dispatch(postSetlistItem(item))
    }
    const handleRemove = (setlist_id) => {
        // const list = Setlists[setlist_id]
        const item = listItems.find(item => item.setlist_id === setlist_id && item.songsheet_id === songId)
        dispatch(DeleteItem(item.id))
    }
    return (
        <div className="p-2">
            {type === 'user' || type === "add" ? <div className="">
                <div className="mb-10  flex flex-col justify-center items-end">

                <h1 className="text-xl md:text-3xl font-bold">My Setlists</h1>
                <OpenModalButton modalComponent={<CreateSetlistModal songId={songId} type="create" addToSetlist={type === "add" ? true : false} />} type="create-setlist" />
                </div>
            </div> :
                <h1 className="text-xl md:text-3xl mb-10 font-bold text-right">All Public Setlists</h1>}
            <div className="grid grid-cols-4">

                <div className="col-span-1">
                    <h2 className="table-head-color font-bold text-xs md:text-base">TITLE</h2>
                    {setlistMapper.map((setlist, index) => (
                        <div className="border-t text-xs md:text-base p-2 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`setlist-title-${index}`}>
                            <NavLink to={`/setlist-detail/${setlist.id}`} className="select-link">
                                {setlist.name}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className={`col-span-1 ${type === "user" && "hidden"}`}>
                    <h2 className="table-head-color font-bold text-xs md:text-base">DESCRIPTION</h2>
                    {setlistMapper.map((setlist, index) => (
                        <div className="border-t text-xs md:text-base p-2 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`setlist-description-${index}`}>
                            {setlist.description}
                        </div>
                    ))}
                </div>
                {type !== "add" && (
                    <div className="col-span-1">
                        <h2 className="table-head-color font-bold text-xs md:text-base">DATE</h2>
                        {setlistMapper.map((setlist, index) => {
                            const dateSplit = setlist.created_at.split(" ");
                            return (
                                <div className="border-t text-xs md:text-base p-2 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`setlist-date-${index}`}>
                                    {`${dateSplit[1]} ${dateSplit[2]} ${dateSplit[3]}`}
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="col-span-1">
                    <h2 className="table-head-color font-bold text-xs md:text-base">SONGSHEETS</h2>
                    {setlistMapper.map((setlist, index) => {
                        const lists = listItems.filter((list) => list.setlist_id === setlist.id);
                        const listLength = lists.length;
                        return (
                            <div className="border-t text-xs md:text-base p-2" key={`setlist-songsheets-${index}`}>
                                {listLength}
                            </div>
                        );
                    })}
                </div>
                {type === "user" && (
                    <div className="col-span-1">
                        <h2 className="table-head-color font-bold text-xs md:text-base">ACTION</h2>
                        {setlistMapper.map((setlist, index) => (
                            <div className="border-t text-xs md:text-base p-[10px]" key={`setlist-action-${index}`}>
                                <div className="flex items-center h-full">
                                    <OpenModalButton
                                        type="delete-setlist"
                                        modalComponent={<DeleteSetlistModal listId={setlist.id} listName={setlist.name} />}
                                    />
                                    <OpenModalButton type="edit-setlist" modalComponent={<CreateSetlistModal type="edit" setlist={setlist} id={setlist.id} />} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {type === "add" && (
                    <div className="col-span-1">
                        <h2 className="table-head-color font-bold text-xs md:text-base">Action</h2>
                        {setlistMapper.map((setlist, index) => {
                            const isInList = listItems.some((list) => list.songsheet_id === songId && list.setlist_id === setlist.id);
                            return (
                                <div className="border-t text-xs md:text-base p-2" key={`setlist-action-${index}`}>
                                    {isInList ? (
                                        <i className="fa fa-check" onClick={() => handleRemove(setlist.id)}></i>
                                    ) : (
                                        <i className="fa fa-plus" onClick={() => handleAdd(setlist.id)}></i>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
                {type === "add" && (
                    <div className="col-span-4">
                        <p onClick={closeModal} id="signup-btn" className="setlist-done" style={{ width: "fit-content", padding: "5px 10px", textAlign: "right" }}>
                            DONE
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
}

//     <div>
//         <OpenModalButton type="create-setlist" modalComponent={<CreateSetlistModal type="create" addToSetlist={true} songId={songId} />} />
//         <p>DONE</p>
//     </div>
// )}
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
