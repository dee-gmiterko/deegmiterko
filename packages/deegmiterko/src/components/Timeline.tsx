import React, { createContext, FunctionComponent, useContext } from "react";

const START = new Date(2025, 0); // Jan 2025
const END   = new Date(2027, 11); // Dec 2027
const TOTAL_MONTHS = (END.getFullYear() - START.getFullYear()) * 12 + (END.getMonth() - START.getMonth());
const WIDTH = 1200;

const LABEL_FONT_SIZE = 26;
const DATE_FONT_SIZE = 20;
const LABEL_GAP = 10;
const EVENT_H = 80;
const RECT_TOP_Y = DATE_FONT_SIZE + LABEL_GAP + LABEL_FONT_SIZE + LABEL_GAP;
const BASELINE_Y = RECT_TOP_Y + EVENT_H;
const HEIGHT = BASELINE_Y + 4;

const DATE_FORMAT = new Intl.DateTimeFormat("cs", { month: "2-digit", year: "numeric" });

const monthsFromStart = (date: Date) =>
  (date.getFullYear() - START.getFullYear()) * 12 + (date.getMonth() - START.getMonth());

const TimelineContext = createContext({ getX: (_month: number) => 0 });

const Tick: FunctionComponent<{ date: Date; isYear?: boolean }> = ({ date, isYear }) => {
  const { getX } = useContext(TimelineContext);
  const x = getX(monthsFromStart(date));
  const w = isYear ? 10 : 6;
  const h = isYear ? 32 : 16;
  const fill = isYear ? "#e3ffe7" : "#d9e7ff";
  return <rect x={x - w / 2} y={BASELINE_Y - h} width={w} height={h} fill={fill} />;
};

const EventMarker: FunctionComponent<{ date: Date; label: string }> = ({ date, label }) => {
  const { getX } = useContext(TimelineContext);
  const x = getX(monthsFromStart(date));
  const formatted = DATE_FORMAT.format(date);
  return (
    <g>
      <text x={x} y={DATE_FONT_SIZE} textAnchor="middle" fontSize={DATE_FONT_SIZE} fontFamily="Arial, sans-serif" fill="#7a8bcf">
        {formatted}
      </text>
      <text x={x} y={DATE_FONT_SIZE + LABEL_GAP + LABEL_FONT_SIZE} textAnchor="middle" fontSize={LABEL_FONT_SIZE} fontFamily="Comfortaa, Arial, sans-serif" fontWeight="bold" fill="#3F2B96">
        {label}
      </text>
      <rect x={x - 5} y={RECT_TOP_Y} width={10} height={EVENT_H} fill="url(#eventGrad)" />
    </g>
  );
};

const Timeline: FunctionComponent = () => {
  const getX = (month: number) => (month / TOTAL_MONTHS) * WIDTH;

  return (
    <TimelineContext.Provider value={{ getX }}>
      <svg width={WIDTH} height={HEIGHT} style={{ width: "100%", height: "auto", display: "block" }}>
        <defs>
          <linearGradient id="eventGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e3ffe7" />
            <stop offset="100%" stopColor="#d9e7ff" />
          </linearGradient>
        </defs>

        <Tick date={new Date(2025, 1)} />
        <Tick date={new Date(2025, 3)} />
        <Tick date={new Date(2025, 5)} />
        <Tick date={new Date(2025, 7)} />
        <Tick date={new Date(2025, 9)} />
        <Tick date={new Date(2025, 11)} />
        <Tick date={new Date(2026, 1)} />
        <Tick date={new Date(2026, 3)} />
        <Tick date={new Date(2026, 5)} />
        <Tick date={new Date(2026, 7)} />
        <Tick date={new Date(2026, 9)} />
        <Tick date={new Date(2026, 11)} />
        <Tick date={new Date(2027, 1)} />
        <Tick date={new Date(2027, 3)} />
        <Tick date={new Date(2027, 5)} />
        <Tick date={new Date(2027, 7)} />
        <Tick date={new Date(2027, 9)} />

        <Tick date={new Date(2025, 0)} isYear />
        <Tick date={new Date(2026, 0)} isYear />
        <Tick date={new Date(2027, 0)} isYear />

        <EventMarker date={new Date(2025, 6)}  label="Design" />
        <EventMarker date={new Date(2025, 8)}  label="Start work" />
        <EventMarker date={new Date(2026, 0)}  label="Initial testing" />
        <EventMarker date={new Date(2026, 3)}  label="Finalization" />
        <EventMarker date={new Date(2026, 4)}  label="Launch" />
        <EventMarker date={new Date(2026, 8)}  label="User goal" />
      </svg>
    </TimelineContext.Provider>
  );
};

export default Timeline;
