import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Counter } from "./components/counter/Counter";

function App() {
	return (
		<div className="App">
			<Application></Application>
			<Counter></Counter>
		</div>
	);
}

export default App;
