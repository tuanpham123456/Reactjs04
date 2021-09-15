import React from "react";
import PropTypes from "props-type";
import "./styles.scss";
import Album from "../Album";

AlbumList.PropTypes = {
  albumList: PropTypes.array
};

function AlbumList({ albumList }) {
  return (
    <div>
      <ul className="album-list">
        {albumList.map((album) => (
          <li key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
