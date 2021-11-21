import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";

import { Button, ListGroup } from "react-bootstrap";

import Play from "../svg/play";

const Item = ({
  imageDesktop,
  imageMobile,
  title,
  category,
  description,
  rank,
  link,
}: {
  imageDesktop: string;
  imageMobile: string;
  title: string;
  category: string;
  description: string;
  rank: number;
  link: string;
}) => {
  const [textExpand, setTextExpand] = useState<boolean>(false);
  const { push } = useRouter();

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }
    return text.substr(0, length) + " ...";
  };

  return (
    <>
      <ListGroup.Item className="movie-item">
        <div className="badge-rank">{rank}</div>
        <div className="description">
          <h5>{title}</h5>
          <h6>{category}</h6>
          <div>
            <p>
              {textExpand ? description : truncateText(description, 50)}
              <span
                onClick={() => setTextExpand(!textExpand)}
                className={`arrow ${textExpand ? "up" : "down"}`}
              />
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            push("/video?url=" + link + "&title=" + title);
          }}
          className="img-wrapper"
        >
          <picture className="img">
            <source srcSet={imageDesktop} media="(min-width: 992px)" />
            <img src={imageMobile} alt="zdjęcie kobiety" />
          </picture>
          <Play className="play-icon" />
        </div>
      </ListGroup.Item>
      <Button
        onClick={() => {
          push("/video?url=" + link + "&title=" + title);
        }}
        className="button"
      >
        See movie trailer
      </Button>
    </>
  );
};

export default Item;
