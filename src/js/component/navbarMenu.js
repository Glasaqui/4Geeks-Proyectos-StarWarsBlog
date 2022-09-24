import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from 'react-bootstrap';

export const NavbarMenu = () => {
	return (
		<Navbar.Brand>
			<Link to="/">
				<Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.ftimg.com%2Fimages%2Flogos%2Fbig%2Fen_US%2Fstar-wars-logo.png&imgrefurl=https%3A%2F%2Fflamingtext.com%2Flogo%2FDesign-Star-Wars&tbnid=RRY0E4_rl3domM&vet=12ahUKEwjRmdKm3KH6AhUKClMKHZhOB2MQMygJegUIARDaAQ..i&docid=zNbQRR4496f0DM&w=272&h=168&q=url%20logo%20star%20wars&ved=2ahUKEwjRmdKm3KH6AhUKClMKHZhOB2MQMygJegUIARDaAQ"
				alt="Star Wars"
				/>

				
			</Link>
		</Navbar.Brand>
		
	//	<nav className="navbar navbar-light bg-light mb-3">
	//		<Link to="/">
	//			<span className="navbar-brand mb-0 h1">Home</span>
	//		</Link>
	//		<div className="ml-auto">
	//			<Link to="/demo">
	//				<button className="btn btn-primary">Check the Context in action</button>
	//			</Link>
	//		</div>
	//	</nav>
	);
};
