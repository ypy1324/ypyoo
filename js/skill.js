const frontend = document.querySelector(".frontend");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const javascript = document.querySelector(".javascript");
const react = document.querySelector(".react");
const angular = document.querySelector(".angular");
const flutter = document.querySelector(".flutter");
const backend = document.querySelector(".backend");
const nodejs = document.querySelector(".nodejs");
const expressjs = document.querySelector(".expressjs");
const firebase = document.querySelector(".firebase");
const mysql = document.querySelector(".mysql");
const mongodb = document.querySelector(".mongodb");
const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);

frontend.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.35 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.4 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.45 },
    { transform: "scale(1)", offset: 0.5 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

html.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.36 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.41 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.46 },
    { transform: "scale(1)", offset: 0.51 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

css.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.37 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.42 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.47 },
    { transform: "scale(1)", offset: 0.52 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

javascript.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.38 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.43 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.48 },
    { transform: "scale(1)", offset: 0.53 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

react.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.39 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.44 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.49 },
    { transform: "scale(1)", offset: 0.54 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

angular.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.4 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.45 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.5 },
    { transform: "scale(1)", offset: 0.55 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

flutter.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.41 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.46 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.51 },
    { transform: "scale(1)", offset: 0.56 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

backend.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.42 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.47 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.52 },
    { transform: "scale(1)", offset: 0.57 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

nodejs.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.43 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.48 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.53 },
    { transform: "scale(1)", offset: 0.58 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

expressjs.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.44 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.49 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.54 },
    { transform: "scale(1)", offset: 0.59 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

firebase.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.45 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.5 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.55 },
    { transform: "scale(1)", offset: 0.6 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

mysql.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.46 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.51 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.56 },
    { transform: "scale(1)", offset: 0.61 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

mongodb.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0.47 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.52 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.57 },
    { transform: "scale(1)", offset: 0.62 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffSets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);
