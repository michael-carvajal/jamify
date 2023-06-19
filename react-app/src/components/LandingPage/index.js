import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./landingpage.css"
export default function LandingPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { songsheets } = useSelector(state => state)
    const { Songsheets, Artists, Albums, Genres } = songsheets
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>
    }
    const songsheetsArray = Object.values(Songsheets)
    // const artistsArr = Object.values(Artists)
    // const genresArr = Object.values(Genres)

    const topHits = songsheetsArray.filter(song => song.id % 2 !== 0 || song.id === 2)
    console.log(topHits);
    const recentPublish = songsheetsArray.slice(songsheetsArray.length - 4);

    const decades = ["1960's", "1970's", "1980's", "2000's", "2010's"]
    return (
        <div className="landing-page">
            <h1>Welcome to Jamify</h1>
            <div className="top-hits">
                <h3>Top Hits</h3>
                <div className="top-hits-body">
                    <img style={{ width: "30%" }} id="top-hits-img" src="https://jamify-aa.s3.us-east-2.amazonaws.com/Artists/ABBA.jpg" alt="band"></img>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {topHits.map(song => {
                                const artistName = Artists[song.artist_id].name
                                return (
                                    <tr>
                                        <th>{artistName}</th>
                                        <th><NavLink to={`/songsheet-detail/${song.id}`}>{song.title}</NavLink></th>
                                        <th><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="categories-published">

                <div className="categories">
                    <h3>Explore our Songsheet Catalog</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>GENRE</th>
                                <th>DECADE</th>
                                <th>TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {decades.map((decade, index) => {
                                const dataKey = index + 1
                                return (
                                    <tr>
                                        <th>{Genres[dataKey].name}</th>
                                        <th>{decade}</th>
                                        <th>{Artists[dataKey]?.name || ""}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="recently-published">
                    <h3>Recently Published</h3>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentPublish.reverse().map(song => {
                                const artistName = Artists[song.artist_id].name
                                return (
                                    <tr>
                                        <th>{artistName}</th>
                                        <th><NavLink to={`/songsheet-detail/${song.id}`}>{song.title}</NavLink></th>
                                        <th>{Math.floor(Math.random() * 1000)} Likes</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
