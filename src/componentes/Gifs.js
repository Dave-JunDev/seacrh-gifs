import React from "react";

export default function Gifs({title, id, url}) {
    {
    return (
    <div>
    <h6>{title}</h6>
    <p>{id}</p>
    <img alt={title} src={url}/>
    </div>
    )
    }
}