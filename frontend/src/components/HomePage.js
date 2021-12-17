import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Link, 
	Redirect, 
} from "react-router-dom";

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<Router>
			<Switch>
				<Route exact path="/">
					<p>Saporra não funciona</p>
				</Route>
				<Route exact path="/join" component={RoomJoinPage}></Route>
				<Route exact path="/create" component={CreateRoomPage}></Route>
			</Switch>
		</Router>)
	}
}
