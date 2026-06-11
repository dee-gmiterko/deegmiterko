import React, { ReactNode } from "react";
import { FunctionComponent } from "react";
import { stringToUniqueIndex } from "../helpers/utils";

const splitScrambleParts = (text: string): ReactNode => {
  const i = 1 + stringToUniqueIndex(text, 8);
  const a = text.substring(0, i);
  const b = text.substring(i);
  return (
    <>
      <span
        className={`scramble-part-${1 + stringToUniqueIndex(`${a}?${b}`, 4)}`}
      >
        {a}
      </span>
      {b ? splitScrambleParts(b) : null}
    </>
  );
};

const Scramble: FunctionComponent<{
  text: string;
}> = ({ text }) => {
  return <div className="scramble">{splitScrambleParts(text)}</div>;
};

export default Scramble;
