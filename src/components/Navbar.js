import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
	const[open, setOpen] = useState(false);
	return(
		<>	

			<div onClick={() => setOpen(!open)} className="menu-icon">
				<div className={open ? "menu-line menu-line-top top-rotate" : "menu-line menu-line-top"}></div>
				<div className={open ? "menu-line menu-line-center center-clear" : "menu-line menu-line-center"}></div>
				<div className={open ? "menu-line menu-line-bottom bottom-rotate" : "menu-line menu-line-bottom"}></div>
			</div>

			<nav className={open ? "nav-links-active" : "nav-links"}>
				<ul>
					<li><NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>Home</NavLink></li>
					<li><NavLink to="more-info" className="nav-link" onClick={() => setOpen(false)}>More Info</NavLink></li>
					<li><NavLink to="news" className="nav-link" onClick={() => setOpen(false)}>News</NavLink></li>
					<li><NavLink to="events" className="nav-link" onClick={() => setOpen(false)}>Events</NavLink></li>
					<li><NavLink to="take-action" className="nav-link" onClick={() => setOpen(false)}>Take Action</NavLink></li>	
				</ul>	
			</nav>

		</>
	)
}