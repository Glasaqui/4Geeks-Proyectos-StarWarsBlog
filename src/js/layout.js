import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import {Container, Row, Col,Navbar} from 'react-bootstrap';
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import  Planets  from "./views/planets";
import  Characters  from "./views/characters";


import { NavbarMenu } from "./component/navbarMenu";
import { Footer } from "./component/footer";
import Personaje from "./component/personaje";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Row>
						<Col>
							<Navbar />
						</Col>
					</Row>
					
					<Row>
						<Col>
							<Switch>
								<Route exact path="/" component={Home}/>
									
								<Route exact path="/planets" component={Planets}/>

								<Route exact path="/character/:id" component={Personaje}/>

								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</Col>
					</Row>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};


export default injectContext(Layout);
