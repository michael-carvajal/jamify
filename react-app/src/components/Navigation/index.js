import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import { fetchAllSongsheets } from '../../store/songsheets';
import { fetchAllSetlists } from '../../store/setlists';

function Navigation() {
	const [search, setSearch] = useState("")
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllSongsheets())
		dispatch(fetchAllSetlists())
	}, [dispatch])
	return (
		<ul className='nav-bar'>
			<li>
				<NavLink exact to="/">Home</NavLink>
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
					<p href='#'>Pro</p>
				</li>
			</div>

			<div className='search-container'>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder='Enter artists name or song title'
				></input>
				<button><i className='fa fa-search'></i></button>
			</div>

		</ul>
	);
}

export default Navigation;
