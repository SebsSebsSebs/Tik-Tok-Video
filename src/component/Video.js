import React, { useRef, useState } from "react";
import "../App.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
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
        src="https://v77.tiktokcdn.com/b5e6397c59777b6242f1deefe0958081/6080ca24/video/tos/useast2a/tos-useast2a-ve-0068c001/3d29067967db47e5a10bbfa36c9c393b/?a=1233&br=598&bt=299&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021042118580101018907203214074E55&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Q1czplbmdmMzMzaTczM0ApZmY8Nmk8OGU2Nzs3PDY6ZWcxcW5xcHBhcmtgLS0tMTZzczVhYy8tNC40NmJjMzFfNWE6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
