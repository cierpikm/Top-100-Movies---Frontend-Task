import React from "react";

const Item = ({ imageDesktop, imageMobile }: { imageDesktop: string; imageMobile: string }) => {
  return (
    <picture>
      <source srcSet={imageDesktop} media="(min-width: 992px)" />
      <img src={imageMobile} alt="zdjęcie kobiety" />
    </picture>
  );
};

export default Item;
