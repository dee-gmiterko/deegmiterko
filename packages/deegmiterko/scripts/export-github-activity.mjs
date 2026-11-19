import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const LOGIN = "dee-gmiterko";
const FIRST_YEAR = 2022;
const OUTPUT_FILE = path.join(
  import.meta.dirname,
  "../src/data/github-activity.json",
);

const QUERY = `
query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}`;

function fetchYear(year, today) {
  const output = execFileSync(
    "gh",
    [
      "api",
      "graphql",
      "-f",
      `login=${LOGIN}`,
      "-f",
      `from=${year}-01-01T00:00:00Z`,
      "-f",
      `to=${year}-12-31T23:59:59Z`,
      "-f",
      `query=${QUERY}`,
    ],
    { encoding: "utf8" },
  );

  const calendar =
    JSON.parse(output).data.user.contributionsCollection.contributionCalendar;
  const days = calendar.weeks
    .flatMap((week) => week.contributionDays)
    .filter((day) => day.date <= today);

  if (days.length === 0 || days[0].date !== `${year}-01-01`) {
    throw new Error(`Unexpected calendar for ${year}`);
  }

  return days.map((day) => day.contributionCount);
}

function exportActivity() {
  const today = new Date().toISOString().slice(0, 10);
  const lastYear = Number(today.slice(0, 4));

  const lines = [];
  for (let year = FIRST_YEAR; year <= lastYear; year++) {
    console.log(`Fetching ${year}...`);
    lines.push(`  "${year}": ${JSON.stringify(fetchYear(year, today))}`);
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, `{\n${lines.join(",\n")}\n}\n`);

  console.log("Done!");
}

exportActivity();
