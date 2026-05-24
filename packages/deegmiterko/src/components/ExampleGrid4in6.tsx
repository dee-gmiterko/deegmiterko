import React, { FunctionComponent, ReactNode } from "react";
import LightboxButton from "./LightboxButton";

type ImageEntry = { path: string; alt: string };

const ExampleGrid4in6: FunctionComponent<{
  children: ReactNode;
  images: [ImageEntry, ImageEntry, ImageEntry, ImageEntry];
}> = ({ children, images }) => (
  <div className="example-bar example-grid-4in6">
    <div className="example-grid-4in6-content">
      {children}
    </div>
    <LightboxButton path={images[3].path} alt={images[3].alt} />
    <LightboxButton path={images[0].path} alt={images[0].alt} />
    <LightboxButton path={images[1].path} alt={images[1].alt} />
    <LightboxButton path={images[2].path} alt={images[2].alt} />
  </div>
);

export default ExampleGrid4in6;
