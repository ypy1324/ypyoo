const education = document.querySelector(".education");
const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);

education.animate(
  [
    { transform: "translateX(-120%)", offset: 0.33 },
    { transform: "translateX(0%)", offset: 0.38 },
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
