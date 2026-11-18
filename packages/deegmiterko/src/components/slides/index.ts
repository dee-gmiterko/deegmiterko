import { FunctionComponent } from "react";

import { Slide, ThumbnailNode } from "../../types";
import SlidesStyloma from "./SlidesStyloma";
import SlidesArtful from "./SlidesArtful";
import SlidesGenerativeDesign from "./SlidesGenerativeDesign";
import SlidesGameExperiments from "./SlidesGameExperiments";
import SlidesProfessional from "./SlidesProfessional";
import SlidesMe from "./SlidesMe";

export const BOOK_COMPONENTS: Record<
  Slide,
  FunctionComponent<{ thumbnails: ThumbnailNode[] }>
> = {
  [Slide.Styloma]: SlidesStyloma,
  [Slide.Artful]: SlidesArtful,
  [Slide.GenerativeDesign]: SlidesGenerativeDesign,
  [Slide.GameExperiments]: SlidesGameExperiments,
  [Slide.Professional]: SlidesProfessional,
  [Slide.Me]: SlidesMe,
};
