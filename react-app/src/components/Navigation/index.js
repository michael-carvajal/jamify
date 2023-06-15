import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { fetchAllSongsheets } from '../../store/songsheets';

function Navigation() {
	const sessionUser = useSelector(state => state.session.user);
	const [search, setSearch] = useState("")
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllSongsheets())
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
					<a href='#'>Pro</a>
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
