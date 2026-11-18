import { FunctionComponent } from "react";

import { ThumbnailNode } from "../../types";
import SlidesStyloma from "./SlidesStyloma";
import SlidesArtful from "./SlidesArtful";
import SlidesGenerativeDesign from "./SlidesGenerativeDesign";
import SlidesGameExperiments from "./SlidesGameExperiments";
import SlidesProfessional from "./SlidesProfessional";
import SlidesMe from "./SlidesMe";

export const BOOK_COMPONENTS: Record<
  string,
  FunctionComponent<{ thumbnails: ThumbnailNode[] }>
> = {
  styloma: SlidesStyloma,
  artful: SlidesArtful,
  "generative-design": SlidesGenerativeDesign,
  "game-experiments": SlidesGameExperiments,
  professional: SlidesProfessional,
  me: SlidesMe,
};
