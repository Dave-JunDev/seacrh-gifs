import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword, numGifs }) {
	const [gifs, setgifs] = useState([]);

	useEffect(() => {
		getGifs({ keyword, numGifs }).then((gifs) => setgifs(gifs));
	}, [keyword, numGifs]);

	return gifs.map(({ title, id, url }) => (
		<Gifs key={id} title={title} id={id} url={url} />
	));
}
