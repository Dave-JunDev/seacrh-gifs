import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./componentes/listofGifs";

function App() {
	const [keyword, setKeyword] = useState();

	return (
		<div className="App">
			<h1>Gif Search</h1>
			<input
				type="text"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Que deseas buscar?"
			/>
			<section className="App-content">
				<ListOfGifs keyword={keyword} numGifs={5} />
			</section>
		</div>
	);
}

export default App;
