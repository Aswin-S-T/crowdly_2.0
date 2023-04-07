import React from "react";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<div>
				<header>
					<Header />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
					</Routes>
				</main>
				<footer></footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
