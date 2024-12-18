import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-2">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact-list">
					<button className="btn btn-success">Show Contact list</button>
				</Link>
				<Link to="/contact-form">
					<button className="btn btn-primary mx-2">Add new Contact</button>
				</Link>
			</div>
		</nav>
	);
};
