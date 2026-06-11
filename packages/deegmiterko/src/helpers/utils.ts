import alea from "alea";

export const stringToUniqueIndex = (text: string, max: number) => {
  const rng = alea(text);
  return Math.floor(rng() * max);
};
