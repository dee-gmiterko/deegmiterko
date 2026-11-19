export const GITHUB_URL = "https://github.com/dee-gmiterko";

const DAYS_IN_WEEK = 7;

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const firstDayRow = (year: number) =>
  (new Date(Date.UTC(year, 0, 1)).getUTCDay() + 6) % DAYS_IN_WEEK;

export const weeksInYear = (year: number) =>
  Math.ceil(
    (firstDayRow(year) + (isLeapYear(year) ? 366 : 365)) / DAYS_IN_WEEK,
  );

export const activityMax = (years: number[][]) => {
  const counts = years
    .flat()
    .filter((count) => count > 0)
    .sort((a, b) => a - b);

  if (counts.length === 0) {
    return 1;
  }

  return Math.max(1, counts[Math.floor((counts.length - 1) * 0.95)]);
};

export const activityOpacity = (count: number, max: number) =>
  count <= 0
    ? 0.08
    : 0.2 + 0.8 * Math.min(1, Math.log1p(count) / Math.log1p(max));
