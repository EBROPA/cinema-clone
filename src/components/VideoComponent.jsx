import React from "react";
import videoWolf from "./video/wolfAndSpice.mp4";

const VideoComponent = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <video
        style={{
          alignItems: "center",
          margin: "30px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        autoPlay
        width="640"
        height="360"
        controls
      >
        <source src={videoWolf} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  );
};

export default VideoComponent;
