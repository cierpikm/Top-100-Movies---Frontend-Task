import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import videojs, { VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.min.css";

import VideoLibrary from "./VideoLibrary";
import { buttonVideoLibrary, controlBarText } from "./utils";
import { MovieType } from "../../types/format";

type VideoPlayerProps = {
  video: { url: string; title: string };
  videosData: Array<MovieType>;
};

const vjsComponent = videojs.getComponent("Component");

class vjsEpisodeList extends videojs.getComponent("Component") {
  state: { videosData: Array<MovieType>; player: any; url: string };

  constructor(player: any, options: any) {
    super(player, options);
    this.state = {
      videosData: options.videosData,
      url: options.url,
      player: options.player,
    };

    this.mount = this.mount.bind(this);

    player.ready(() => {
      this.mount();
    });

    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el());
    });
  }

  mount() {
    ReactDOM.render(
      <VideoLibrary
        videosData={this.state.videosData}
        player={this.state.player}
        url={this.state.url}
      />,
      this.el()
    );
  }
}

vjsComponent.registerComponent("vjsEpisodeList", vjsEpisodeList);

export default vjsEpisodeList;

export const VideoPlayer = ({ video, videosData }: VideoPlayerProps) => {
  const playerRef = useRef<videojs.Player | any>();
  const player = useRef<videojs.Player | any>();

  const setup: VideoJsPlayerOptions = {
    controls: true,
    preload: "auto",
    fluid: true,
    controlBar: { pictureInPictureToggle: false },
  };

  useEffect(() => {
    player.current = videojs(playerRef.current, setup, () => {
      player.current.src({
        src: video.url,
      });
    });

    controlBarText(player.current, video.title, 16);

    buttonVideoLibrary(player.current, "video-control-button", 20);

    videosData &&
      player.current.addChild("vjsEpisodeList", {
        videosData: videosData,
        url: video.url,
        player: player.current,
      });

    return () => {
      player.current.dispose();
    };
  }, []);

  return (
    <div className="additional-wrapper">
      <div className="data-vjs-player">
        <video
          ref={playerRef}
          id="videoPlayer"
          className="video-js vjs-big-play-centered vjs-fill main-video-player video-control-text video-control-button"
          playsInline
          data-setup="{}"
          preload="auto"
          controls
        />
      </div>
    </div>
  );
};
