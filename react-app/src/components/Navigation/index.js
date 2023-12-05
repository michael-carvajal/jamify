import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import { fetchAllSongsheets } from '../../store/songsheets';
import { fetchAllSetlists } from '../../store/setlists';
import Keyboard from '../Keyboard';
import DropdownMenu from './DropdownMenu';

function Navigation() {
	const [search, setSearch] = useState('');
	const [displayPiano, setDisplayPiano] = useState('');
	const [filteredSongsheets, setFilteredSongsheets] = useState([]);
	const dispatch = useDispatch();
	const songsheets = useSelector((state) => state.songsheets);
	const resultsRef = useRef(null);
	const dropdownRef = useRef(null);
	const buttonRef = useRef(null);

	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};
	useEffect(() => {
		dispatch(fetchAllSongsheets());
		dispatch(fetchAllSetlists());
	}, [dispatch]);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (resultsRef.current && !resultsRef.current.contains(event.target)) {
				setSearch('');
				setFilteredSongsheets([]);
			}
			if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};

		window.addEventListener('click', handleOutsideClick);

		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			searchFeature();
		}, 300); // Adjust the debounce timeout as needed (e.g., 300ms)

		return () => {
			clearTimeout(debounceTimeout);
		};
	}, [search]);

	const pianoFeature = () => {
		if (!displayPiano) {
			setDisplayPiano('display');
		} else {
			setDisplayPiano('');
		}
	};

	const searchFeature = () => {
		if (search.trim() === '') {
			setFilteredSongsheets([]);
			return;
		}

		const filtered = Object.values(songsheets?.Songsheets || {}).filter(
			(songsheet) =>
				songsheet.title.toLowerCase().includes(search.toLowerCase())
		).splice(0, 6);
		setFilteredSongsheets(filtered);
	};

	const handleLinkClick = () => {
		setSearch('');
		setFilteredSongsheets([]);
	};

	return (
		<ul className='nav-bar'>
			<li>
				<NavLink exact to='/'>
					<div className='logo-container'>
						<img src='/logo2.png' alt='logo' id='logo' />
					</div>
				</NavLink>
			</li>

			{/* Hamburger Icon for Small Screens */}
			<li className='md:hidden relative'>
				<button ref={buttonRef} onClick={toggleDropdown}>
					<i className='fa fa-bars'></i>
				</button>
			{/* Dropdown Menu for Small Screens */}
			<DropdownMenu isOpen={isDropdownOpen} onClose={toggleDropdown} pianoFeature={pianoFeature} dropdownRef={dropdownRef} />
			</li>
			<div className='hidden md:flex'>
				<li>
					<NavLink to='/songsheets'>Songsheets</NavLink>
				</li>
				<li>
					<NavLink to='/publish'>
						<i className='fa fa-plus'></i>Publish
					</NavLink>
				</li>
				<li>
					<NavLink to='/setlists'>Setlists</NavLink>
				</li>
				<li>
					<p onClick={pianoFeature}>Piano</p>
				</li>
			</div>

			<div className='search-container'>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Enter a song title'
				></input>
				<button onClick={searchFeature}>
					<i className='fa fa-search'></i>
				</button>

				{filteredSongsheets.length > 0 && (
					<div className='results-container' ref={resultsRef}>
						<div className='search-results'>
							<h3>Search Results:</h3>
							<ul>
								{filteredSongsheets.map((songsheet) => (
									<li key={songsheet.id} className='list-link'>
										<NavLink
											to={`/songsheet-detail/${songsheet.id}`}
											onClick={handleLinkClick}
										>
											{songsheet.title}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>

			<Keyboard displayPiano={displayPiano} />
		</ul>
	);
}

export default Navigation;
