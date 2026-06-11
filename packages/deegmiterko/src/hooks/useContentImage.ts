import { useContentImages } from "./useContentImages";

export const useContentImage = (path: string) => {
  const imageMap = useContentImages();
  const image = imageMap[path];
  if (!image) throw new Error(`Image not found: ${path}`);
  return image;
};
