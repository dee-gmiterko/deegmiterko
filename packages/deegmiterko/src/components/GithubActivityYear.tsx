import React, { FunctionComponent } from "react";

import { activityOpacity, firstDayRow } from "../helpers/githubActivity";

const ROWS = 7;

type GithubActivityYearType = {
  year: number;
  data: number[];
  max: number;
  weeks: number;
};

const GithubActivityYear: FunctionComponent<GithubActivityYearType> = ({
  year,
  data,
  max,
  weeks,
}) => {
  const offset = firstDayRow(year);
  const total = data.reduce((sum, count) => sum + count, 0);

  return (
    <div className="github-activity-year">
      <div className="header">
        <span className="year">{year}</span>
        <span className="total">
          {total} <small>contributions</small>
        </span>
      </div>
      <div
        className="cells"
        style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}
        role="img"
        aria-label={`${total} contributions in ${year}`}
      >
        {data.map((count, day) => {
          const slot = offset + day;
          return (
            <div
              key={day}
              className="cell"
              style={{
                gridColumn: Math.floor(slot / ROWS) + 1,
                gridRow: (slot % ROWS) + 1,
                opacity: activityOpacity(count, max),
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GithubActivityYear;
