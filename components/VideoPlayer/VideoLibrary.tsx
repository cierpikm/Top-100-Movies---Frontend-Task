import React, { useRef } from "react";
import { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { MovieType } from "../../types/format";

import VideoLibraryItem from "./VideoLibraryItem";

export default function VideoLibrary({
  player,
  videosData,
  url,
}: {
  player: any;
  videosData?: any;
  url: string;
}) {
  const [libraryContent, setLibraryContent] = useState<boolean>(false);
  const timeoutRef = useRef<any>();

  const onMouseLeave = () => {
    setLibraryContent(false);
    player.controlBar.progressControl.show();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  const onMouseEnter = () => {
    if (!player || !player.hasStarted()) return;
    timeoutRef.current = setTimeout(() => {
      player.controlBar.progressControl.hide();
      setLibraryContent(true);
    }, 250);
  };

  const onTouch = () => {
    setLibraryContent(!libraryContent);
    !libraryContent
      ? player.controlBar.progressControl.hide()
      : player.controlBar.progressControl.show();
  };

  return (
    <div
      onMouseLeave={() => {
        onMouseLeave();
      }}
      className="video-library-wrapper"
    >
      <div
        style={{
          opacity: libraryContent ? 1 : 0,
          visibility: libraryContent ? "visible" : "hidden",
        }}
        className="video-library"
      >
        <Accordion
          id="video-accordion"
          className="movies-list-accordion"
          defaultActiveKey="285532297"
        >
          {videosData &&
            videosData.map((s: MovieType) => (
              <VideoLibraryItem
                key={s.id.label}
                title={s.title.label}
                eventKey={s.id.attributes["im:id"]}
                imageSrc={s["im:image"][2].label}
                onClick={() => {
                  window.location.href =
                    "/video?url=" + s.link[1].attributes.href + "&title=" + s.title.label;
                }}
              />
            ))}
        </Accordion>
        <div
          style={{
            opacity: libraryContent ? 1 : 0,
            visibility: libraryContent ? "visible" : "hidden",
          }}
          className="blur"
        />
      </div>
      <div onMouseOver={onMouseEnter} onTouchStart={onTouch} className="click-area" />
    </div>
  );
}
