import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from 'react-bootstrap';
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const {store} = useContext(Context)
	
	return (
				
		<nav className="navbar navbar-light bg-light mb-3">
			<img src="https://i0.wp.com/1.bp.blogspot.com/-4UR7rwKNZ4w/VertUcJoZMI/AAAAAAAADZk/L41FmiBG3lk/s1600/star-wars-7-trailer.jpg" width="100" height="80"/>

			
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites && store.favorites.map((item,index) => <li key={index}><a className="dropdown-item">{item}</a></li> )}
						
					</ul>
				</div>
			</div>
		</nav>
	);
};
