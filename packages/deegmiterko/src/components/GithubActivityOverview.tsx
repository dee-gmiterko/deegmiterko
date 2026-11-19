import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import GithubActivityYear from "./GithubActivityYear";
import useApp from "../hooks/useApp";import {
  GITHUB_URL,
  activityMax,
  weeksInYear,
} from "../helpers/githubActivity";

import activity from "../data/github-activity.json";

const years = Object.entries(activity as Record<string, number[]>)
  .map(([year, data]) => ({ year: Number(year), data }))
  .sort((a, b) => b.year - a.year);

const max = activityMax(years.map(({ data }) => data));
const weeks = Math.max(...years.map(({ year }) => weeksInYear(year)));

const GithubActivityOverview: FunctionComponent = () => {
  const { bookPageScale } = useApp();

  return (
    <div
      className="github-activity"
      style={{ "--book-page-scale": bookPageScale }}
      onClick={() => window.open(GITHUB_URL, "_blank", "noopener")}
    >
      <h2>
        GitHub contributions
        <FontAwesomeIcon icon={faGithub} />
      </h2>
      {years.map(({ year, data }) => (
        <GithubActivityYear
          key={year}
          year={year}
          data={data}
          max={max}
          weeks={weeks}
        />
      ))}
    </div>
  );
};

export default GithubActivityOverview;
