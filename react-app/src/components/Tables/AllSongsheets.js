import { useSelector } from "react-redux"
import './Tables.css'
export default function AllSongsheets() {
    const { songsheets } = useSelector(state => state)
    const { Songsheets, Artists, Albums } = songsheets
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>
    }
    const songsheetsArray = Object.values(Songsheets)

    // console.log("this is in all sheets ", songsheetsArray);
    return (
        <div id="table-container">

            <table>
                <thead>
                    <tr>
                        <th>ARTISTS</th>
                        <th>SONG</th>

                        <th>RATING</th>
                        <th>LIKES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songsheetsArray.map((song, index) => {
                            const artistId = song.artist_id
                            return (
                                <tr className="table-row" key={`song-list-${index}`}>
                                    <td>{Artists[artistId].name}</td>
                                    <td>{song.title}</td>

                                    <td>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </td>
                                    <td>50</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
