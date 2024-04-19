import React, { useEffect } from "react";

const VideoBackground = ({ videoId }) => {
  useEffect(() => {
    // Load YouTube iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when the API is ready
    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("player", {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          mute: 1,
          playlist: videoId,
          modestbranding: 1,
          playsinline: 1,
          fs: 0,
          iv_load_policy: 3,
          autohide: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    // Pause video when component unmounts
    return () => {
      if (player) {
        player.pauseVideo();
      }
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.playVideo();
    event.target.setPlaybackQuality("hd1080");
  };

  return (
    <div
      id="player"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    ></div>
  );
};

export default VideoBackground;
