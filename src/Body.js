import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ select_playlist }, dispatch] = useDataLayerValue();
  console.log("kjaskjas", select_playlist);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={select_playlist?.images[0]?.url} alt="poster" />
        <div className="body__infoText">
          <strong>{select_playlist?.type}</strong>
          <h2>{select_playlist?.name}</h2>
          <p>{select_playlist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__Icon">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
      {select_playlist?.tracks.items.map((song) => (
        <SongRow track={song.track} />
      ))}
    </div>
  );
}

export default Body;
