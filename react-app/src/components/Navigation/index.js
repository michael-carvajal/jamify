import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import { fetchAllSongsheets } from '../../store/songsheets';
import { fetchAllSetlists } from '../../store/setlists';

function Navigation() {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true); // State to track loading status
	const dispatch = useDispatch();

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setIsLoading(false); // Set loading status to false after one second
		}, 1000);

		dispatch(fetchAllSongsheets());
		dispatch(fetchAllSetlists());

		return () => clearTimeout(loadingTimeout); // Clear the timeout on unmounting
	}, [dispatch]);

	const proFeature = () => {
		alert("Pro feature coming soon!");
	};

	if (isLoading) {
		return (
			<div className='loading-container'>

				<img src="/les-paul.svg" alt="SVG Image" id="guitar-spin" />
			</div>
		);
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
					<p onClick={proFeature}>Pro</p>
				</li>
			</div>

			<div className='search-container'>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder='Enter artist name or song title'
				></input>
				<button><i className='fa fa-search'></i></button>
			</div>
		</ul>
	);
}

export default Navigation;
