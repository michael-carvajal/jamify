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
            <div >
                <h3 className="md:text-lg">Top Hits</h3>
                <div className="top-hits-body my-5">
                    <img style={{ width: "30%" }} className="hidden md:block" id="top-hits-img" src="https://jamify-aa.s3.us-east-2.amazonaws.com/Artists/ABBA.jpg" alt="band"></img>
                    <div className="grid grid-cols-3  p-2">
                        <div className="font-bold text-xs md:text-base">Artist</div>
                        <div className="font-bold text-xs md:text-base">Title</div>
                        <div className="font-bold text-xs md:text-base">Rating</div>
                        {topHits.map((song, index) => {
                            if (index > 3) {
                                return null;
                            }
                            const artistName = Artists[song.artist_id].name;
                            return (
                                <React.Fragment key={`tophits-key${index}`}>
                                    <div className="border-t py-2 text-xs md:text-base">{artistName}</div>
                                    <div className="border-t py-2 text-xs md:text-base">
                                        <NavLink to={`/songsheet-detail/${song.id}`} className="songsheet-link">
                                            {song.title}
                                        </NavLink>
                                    </div>
                                    <div className="border-t py-2">
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
            <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                <div className="recently-published">
                    <h3>Recently Published</h3>
                    <div className="grid grid-cols-3 p-2">
                        <div>Artist</div>
                        <div>Title</div>
                        <div>Likes</div>
                        {recentPublish.reverse().map((song, index) => {
                            const artistName = Artists[song.artist_id].name;
                            return (
                                <React.Fragment key={`recently-published-${index}`}>
                                    <div className="border-t py-2">{artistName}</div>
                                    <div className="border-t py-2">
                                        <NavLink to={`/songsheet-detail/${song.id}`} className="songsheet-link">
                                            {song.title}
                                        </NavLink>
                                    </div>
                                    <div className="border-t py-2">{Math.floor(Math.random() * 1000)} Likes</div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
                <div className="categories">
                    <h3>Explore our Songsheet Catalog</h3>
                    <div className="grid grid-cols-3 p-2">
                        <div>Genre</div>
                        <div>Decade</div>
                        <div>Artists</div>
                        {decades.map((decade, index) => {
                            const dataKey = index + 1;
                            return (
                                <React.Fragment key={`decades-${index}`}>
                                    <div className="border-t py-2">{Genres[dataKey].name}</div>
                                    <div className="border-t py-2">{decade}</div>
                                    <div className="border-t py-2">{Artists[dataKey]?.name || ""}</div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
