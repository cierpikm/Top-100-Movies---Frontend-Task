import React, { useState } from "react";

import { ListGroup } from "react-bootstrap";

const Item = ({
  imageDesktop,
  imageMobile,
  title,
  category,
  description,
}: {
  imageDesktop: string;
  imageMobile: string;
  title: string;
  category: string;
  description: string;
}) => {
  const [textExpand, setTextExpand] = useState<boolean>(false);

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }
    return text.substr(0, length) + " ...";
  };

  return (
    <ListGroup.Item className="movie-item">
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

      <picture>
        <source srcSet={imageDesktop} media="(min-width: 992px)" />
        <img src={imageMobile} alt="zdjęcie kobiety" />
      </picture>
    </ListGroup.Item>
  );
};

export default Item;
