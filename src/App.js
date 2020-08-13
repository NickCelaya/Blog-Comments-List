import React from "react";
// import logo from "./logo.svg";
// import Hello from "./components/Hello";
import "./App.css";

const App = () => {
	const buttonText = "Click me";
	const labelText = "Enter Name:";

	return (
		<div className='App'>
			<label className='label' htmlFor='name'>
				{labelText}
			</label>
			<input id='name' type='text' />
			<button style={{ backgroundColor: "blue", color: "white" }}>
				{buttonText}
			</button>
			test test
		</div>
	);
};

export default App;
