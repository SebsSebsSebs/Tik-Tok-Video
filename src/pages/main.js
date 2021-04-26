import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "../component/Video";
import "../App.css";

function Main() {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    async function fetch() {
      const res = await axios.get("http://localhost:5000/video");
      setVideos(res.data);
      return res;
    }
    fetch();
  }, []);

  return (
    <div className="main">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Main;
