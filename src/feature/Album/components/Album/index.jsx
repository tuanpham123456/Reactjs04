import React from "react";
import PropTypes from "props-type";
import "./styles.scss";
Album.PropTypes = {
  albumList: PropTypes.array
};

function Album({ album }) {
  return (
    <div className="album-title">
      <p>{album.title}</p>
    </div>
  );
}

export default Album;
