import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1 style={{ margin: "0px auto" }}>{track.name}</h1>
        <p style={{ margin: "0px auto" }}>
          {track.artists.map((artists) => artists.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
