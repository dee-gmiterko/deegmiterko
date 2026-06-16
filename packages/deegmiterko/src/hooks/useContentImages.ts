import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { useMemo } from "react";

export const useContentImages = () => {
  const data = useStaticQuery<{
    contentImages: {
      edges: {
        node: {
          relativePath: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      }[];
    };
    contentImagesSmall: {
      edges: {
        node: {
          relativePath: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      }[];
    };
  }>(graphql`
    query {
      contentImages: allFile(
        filter: {
          sourceInstanceName: { eq: "contentImages" }
          extension: { in: ["jpg", "jpeg", "png", "gif", "webp", "avif"] }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 1920
                quality: 95
                outputPixelDensities: [1.0]
              )
            }
          }
        }
      }
      contentImagesSmall: allFile(
        filter: {
          sourceInstanceName: { eq: "contentImages" }
          extension: { in: ["jpg", "jpeg", "png", "gif", "webp", "avif"] }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                outputPixelDensities: [0.25, 0.5, 1.0, 2.0]
              )
            }
          }
        }
      }
    }
  `);

  const imageMap = useMemo(() => {
    const imageMap: Record<
      string,
      [null | IGatsbyImageData, IGatsbyImageData]
    > = {};
    for (const {
      node: { relativePath, childImageSharp },
    } of data.contentImages.edges) {
      if (childImageSharp) {
        imageMap[relativePath] = [null, childImageSharp.gatsbyImageData];
      }
    }
    for (const {
      node: { relativePath, childImageSharp },
    } of data.contentImagesSmall.edges) {
      if (childImageSharp) {
        imageMap[relativePath][0] = childImageSharp.gatsbyImageData;
      }
    }
    return imageMap as Record<string, [IGatsbyImageData, IGatsbyImageData]>;
  }, [data]);

  return imageMap;
};
