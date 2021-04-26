import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ song, description }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@sebs</h3>
        <p>This is description</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        alt=""
        src="https://static.thenounproject.com/png/934821-200.png"
      />
    </div>
  );
}

export default VideoFooter;
