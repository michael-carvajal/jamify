import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import { fetchAllSongsheets } from '../../store/songsheets';
import { fetchAllSetlists } from '../../store/setlists';
import Keyboard from '../Keyboard';

function Navigation() {
	const [search, setSearch] = useState("")
	const [displayPiano, setDisplayPiano] = useState("")
	const dispatch = useDispatch()
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
		alert("Search Bar feature coming soon!")
	}
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
					onChange={e => setSearch(e.target.value)}
					placeholder='Enter artists name or song title'
				></input>
				<button onClick={searchFeature}><i className='fa fa-search'></i></button>
			</div>
			<Keyboard displayPiano={displayPiano} />
		</ul>
	);
}

export default Navigation;
