import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";
import React, { FunctionComponent } from "react";
import { useContentImage } from "../hooks/useContentImage";
import useApp from "../hooks/useApp";
import clsx from "clsx";

const LightboxButton: FunctionComponent<
  {
    path: string;
    buttonClassName?: string;
  } & Omit<GatsbyImageProps, "image">
> = ({ path, buttonClassName, ...props }) => {
  const { setLightboxImage } = useApp();
  const [small, large] = useContentImage(path);

  return (
    <button
      onClick={() => setLightboxImage(large)}
      className={clsx("lightbox-button", buttonClassName)}
    >
      <GatsbyImage image={small} {...props} />
    </button>
  );
};

export default LightboxButton;
