import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";

function Body({ spotify }) {
  const [{ select_playlist }, dispatch] = useDataLayerValue();
  console.log("kjaskjas", select_playlist);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={select_playlist?.images[0]?.url} alt="poster" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>{select_playlist?.name}</h2>
          <p>discrition...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
