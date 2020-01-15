import items from "./items";
import React from "react";
import "./Gallery.css";
import { useHistory, useParams } from "react-router-dom";

function Display() {
  const history = useHistory();
  const back = e => {
    history.goBack();
  };

  const { id } = useParams();
  const pid = items.find(e => e.id === id);
  return (
    <div>
      <div className="backButton">
        <button onClick={back} type="button">
          Back
        </button>
      </div>

      <div className="displayImage">
        <img src={pid.url} alt="" />
      </div>

      <div className="displayImageDetails">
        <p>Author : {pid.author}</p>
        <p>
          <a href={pid.url}> Splash-Url </a>
        </p>
        <p>
          <a href={pid.download_url}> Splash-Download-Url </a>
        </p>
      </div>
    </div>
  );
}

export default Display;
