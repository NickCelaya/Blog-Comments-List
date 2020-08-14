import React from "react";
// import logo from "./logo.svg";
// import Hello from "./components/Hello";
import "./App.css";
import faker from "faker";

const App = () => {
	return (
		<div className='ui container comments'>
			<div className='comment'>
				<a href='/' className='avatar'>
					<img alt='avatar' src={faker.image.avatar()} />
				</a>
				<div className='content'>
					<a href='/' className='author'>
						Diego
					</a>
				</div>
				<div className='metadata'>
					<span className='date'>Today at 6:00PM</span>
				</div>
				<div className='text'>Nice blog post!</div>
			</div>
			<div className='comment'>
				<a href='/' className='avatar'>
					<img alt='avatar' src={faker.image.avatar()} />
				</a>
				<div className='content'>
					<a href='/' className='author'>
						Diego
					</a>
				</div>
				<div className='metadata'>
					<span className='date'>Today at 6:00PM</span>
				</div>
				<div className='text'>Nice blog post!</div>
			</div>
		</div>
	);
};

export default App;
