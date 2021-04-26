import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, likes, shares, comments, song, description }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideo}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      />

      <VideoFooter song={song} description={description} />
      <VideoSidebar likes={likes} shares={shares} comments={comments} />
    </div>
  );
}

export default Video;
