const airplane = document.querySelector(".airplane");
const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);

airplane.animate(
  [
    { offsetDistance: "100%", offset: 0 },
    { offsetDistance: "70%", offset: 0.25 },
    { offsetDistance: "0%", offset: 1 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

let prevScrollY = -1;
let scrollFlag;
window.addEventListener("scroll", (e) => {
  if (scrollFlag) return;

  scrollFlag = true;

  setTimeout(() => {
    scrollFlag = false;

    if (window.scrollY >= prevScrollY) {
      airplane.dataset.direction = "down";
    } else {
      airplane.dataset.direction = "up";
    }
    prevScrollY = window.scrollY;
  }, 100);
});
