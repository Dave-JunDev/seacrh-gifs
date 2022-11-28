import React, {useEffect,useState} from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({keyword}) {

  const [gifs, setgifs] = useState([]);

    useEffect(() => {
      getGifs({keyword}).then(gifs => setgifs(gifs));
    }, [keyword]);

    return (
        gifs.map(({title, id, url}) =>
        <Gifs
        key = {id}
        title = {title}
        id = {id}
        url = {url}
        />)
    )
}
