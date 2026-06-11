import moment, { Moment } from "moment";
import React, { FunctionComponent, useMemo } from "react";

const WIDTH = 1000;
const HEIGHT = 400;
const BASELINE_Y = 220;

const getX = (date: Moment, start: Moment, totalMonths: number) =>
  (date.diff(start, "months") / totalMonths) * (WIDTH - 40) + 20;

const Tick: FunctionComponent<{
  date: Moment;
  isYear?: boolean;
  label?: string;
  start: Moment;
  totalMonths: number;
}> = ({ date, isYear, label, start, totalMonths }) => {
  const x = getX(date, start, totalMonths);
  const w = isYear ? 10 : 8;
  const h = isYear ? 50 : 30;
  return (
    <g>
      <rect
        x={x - w / 2}
        y={BASELINE_Y - h / 2}
        width={w}
        height={h}
        fill="white"
      />
      {label && (
        <text
          x={x - 26 / 2}
          y={BASELINE_Y + 40}
          textAnchor="start"
          fontSize={isYear ? 26 : 20}
          fontFamily="Comfortaa, Arial, sans-serif"
          fill={"#7d6fbf"}
          transform={`rotate(90 ${x - 26 / 2} ${BASELINE_Y + 40})`}
        >
          {label}
        </text>
      )}
    </g>
  );
};

const EventMarker: FunctionComponent<{
  date: Moment;
  label: string;
  start: Moment;
  totalMonths: number;
}> = ({ date, label, start, totalMonths }) => {
  const x = getX(date, start, totalMonths);
  return (
    <g>
      <rect
        x={x - 4}
        y={BASELINE_Y - 25}
        width={8}
        height={50}
        fill="#5a49a9"
      />
      ;
      <text
        x={x}
        y={BASELINE_Y - 40}
        textAnchor="start"
        fontSize={26}
        fontFamily="Comfortaa, Arial, sans-serif"
        fill="#5a49a9"
        transform={`rotate(-45, ${x}, ${BASELINE_Y - 40})`}
      >
        {label}
      </text>
    </g>
  );
};

interface TimelineEvent {
  date: string;
  label: string;
}

const Timeline: FunctionComponent<{
  start: string;
  end: string;
  events: TimelineEvent[];
}> = ({ start, end, events }) => {
  const startM = moment(start);
  const endM = moment(end);
  const totalMonths = endM.diff(startM, "months");

  const eventMonths = new Set(
    events.map((e) => moment(e.date).format("YYYY-MM")),
  );

  const ticks: Moment[] = [];
  const cur = startM.clone();
  while (!cur.isAfter(endM)) {
    ticks.push(cur.clone());
    cur.add(1, "month");
  }

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 0.15))",
      }}
    >
      <defs>
        <linearGradient id="eventGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#f0f6ff" />
        </linearGradient>
      </defs>

      {ticks.map((t) => {
        const isYear = t.month() === 0;
        const key = t.format("YYYY-MM");
        const label = isYear
          ? t.format("Y")
          : eventMonths.has(key)
            ? t.format("MMM")
            : undefined;
        return (
          <Tick
            key={key}
            date={t}
            isYear={isYear}
            label={label}
            start={startM}
            totalMonths={totalMonths}
          />
        );
      })}

      {events.map((e) => (
        <EventMarker
          key={e.date}
          date={moment(e.date)}
          label={e.label}
          start={startM}
          totalMonths={totalMonths}
        />
      ))}
    </svg>
  );
};

const StylomaTimeline: FunctionComponent = () =>
  useMemo(
    () => (
      <Timeline
        start="2025-01"
        end="2027-01"
        events={[
          { date: "2025-07", label: "Design" },
          { date: "2025-09", label: "Start work" },
          { date: "2026-01", label: "Initial testing" },
          { date: "2026-04", label: "Finalization" },
          { date: "2026-06", label: "Beta Launch" },
        ]}
      />
    ),
    [],
  );

export default StylomaTimeline;
