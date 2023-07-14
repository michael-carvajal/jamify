import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import { fetchAllSongsheets } from '../../store/songsheets';
import { fetchAllSetlists } from '../../store/setlists';
import Keyboard from '../Keyboard';

function Navigation() {
	const [search, setSearch] = useState("")
	const [displayPiano, setDisplayPiano] = useState("")
	const dispatch = useDispatch()
	const songsheets = useSelector((state) => state.songsheets);
	const [filteredSongsheets, setFilteredSongsheets] = useState([]);

	useEffect(() => {
		dispatch(fetchAllSongsheets())
		dispatch(fetchAllSetlists())
	}, [dispatch])

	const pianoFeature = () => {
		if (!displayPiano) {
			setDisplayPiano("display")
			return
		}
		setDisplayPiano("")
	}

	const searchFeature = () => {

		const filtered = Object.values(songsheets.Songsheets).filter(
			(songsheet) =>
				songsheet.title.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredSongsheets(filtered);
	};
	console.log(search);
	return (
		<ul className='nav-bar'>
			<li>
				<NavLink exact to="/">
					<div className='logo-container'>

					<img src='/logo2.png' alt='logo' id="logo"></img>
					</div>
				</NavLink>
			</li>
			<div className='nav-links'>

				<li>
					<NavLink to="/songsheets">Songsheets</NavLink>
				</li>
				<li>
					<NavLink to="/publish"><i className='fa fa-plus'></i>Publish</NavLink>
				</li>
				<li>
					<NavLink to="/setlists">Setlists</NavLink>
				</li>
				<li>
					<p onClick={pianoFeature}>Piano</p>
				</li>
			</div>

			<div className='search-container'>
				<input
					value={search}
					onChange={e => {
						setSearch(e.target.value)
						searchFeature()
					}}
					placeholder='Enter artists name or song title'
				></input>
				<button onClick={searchFeature}><i className='fa fa-search'></i></button>
			<div className='results-container'>

			{filteredSongsheets.length > 0 && (
				<div className='search-results'>
					<h3>Search Results:</h3>
					<ul>
						{filteredSongsheets.map((songsheet) => (
							<li><NavLink to={`/songsheet-detail/${songsheet.id}`} key={songsheet.id}>{songsheet.title}</NavLink></li>
							))}
					</ul>
				</div>
			)}
			</div>
			</div>
			<Keyboard displayPiano={displayPiano} />
		</ul>
	);
}

export default Navigation;
