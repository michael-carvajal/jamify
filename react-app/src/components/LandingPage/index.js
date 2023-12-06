import { useSelector } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./landingpage.css"
export default function LandingPage() {
    // const sessionUser = useSelector(state => state.session.user);
    const { songsheets } = useSelector(state => state)
    const { Songsheets, Artists, Genres } = songsheets
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div></div>
    }
    const songsheetsArray = Object.values(Songsheets)
    // const artistsArr = Object.values(Artists)
    // const genresArr = Object.values(Genres)

    const topHits = songsheetsArray.filter(song => song.id % 2 !== 0 || song.id === 2)
    const recentPublish = songsheetsArray.slice(songsheetsArray.length - 4);
    const imgUrls = ["https://jamify-aa.s3.us-east-2.amazonaws.com/Artists/jb.jpg","https://jamify-aa.s3.us-east-2.amazonaws.com/Artists/the_beatles.jpg", "https://jamify-aa.s3.us-east-2.amazonaws.com/Artists/ABBA.jpg",]
    const decades = ["1960's", "1970's", "1980's", "2000's", "2010's"]
    return (
        <div className="landing-page overflow-hidden">
            <h1 className="text-xl md:text-3xl font-bold text-center">Welcome To Jamify</h1>
            <div className=" ">
                <h3>Top Hits</h3>
                <div className="top-hits-body my-5">
                    <img style={{ width: "30%" }} className="hidden md:block" id="top-hits-img" src="https://jamify-aa.s3.us-east-2.amazonaws.com/Artists/ABBA.jpg" alt="band"></img>
                    <div className="grid grid-cols-3  p-2">
                        <div className="font-bold">Artist</div>
                        <div className="font-bold">Title</div>
                        <div className="font-bold">Rating</div>
                        {topHits.map((song, index) => {
                            if (index > 3) {
                                return null;
                            }
                            const artistName = Artists[song.artist_id].name;
                            return (
                                <React.Fragment key={`tophits-key${index}`}>
                                    <div className="border-t p-2 text-xs md:text-base">{artistName}</div>
                                    <div className="border-t p-2 text-xs md:text-base">
                                        <NavLink to={`/songsheet-detail/${song.id}`} className="songsheet-link">
                                            {song.title}
                                        </NavLink>
                                    </div>
                                    <div className="border-t p-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>


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
                                <th>ARTISTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {decades.map((decade, index) => {
                                const dataKey = index + 1
                                return (
                                    <tr key={`decades-${index}`}>
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

                        </thead>
                        <tbody>
                            {recentPublish.reverse().map((song, index) => {
                                const artistName = Artists[song.artist_id].name
                                return (
                                    <tr key={`recently-published-${index}`}>
                                        <th>{artistName}</th>
                                        <th><NavLink to={`/songsheet-detail/${song.id}`} className="songsheet-link">{song.title}</NavLink></th>
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
