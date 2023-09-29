import React from "react";
import { Link } from "react-router-dom";
//comentario de prueba
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">CH3LC0</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">R3G1STR3SE3</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
