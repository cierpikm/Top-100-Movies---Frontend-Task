import { VideoJsPlayer } from "video.js";

export const buttonVideoLibrary = (player: VideoJsPlayer, className: string, indexopt: number) => {
  const myText = player.controlBar.addChild("button", {}, indexopt);
  myText.addClass("wrapper");

  const svg = myText.addChild("Component");
  svg.addClass(className);
};

export const controlBarText = (player: VideoJsPlayer, text: string, indexopt: number) => {
  const myText = player.controlBar.addChild("Component", {}, indexopt);
  const myButtonDom = myText.el();
  myText.addClass("video-control-text");
  myButtonDom.innerHTML = text;
};
