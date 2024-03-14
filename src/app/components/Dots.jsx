"use client";
import anime from "animejs";

const Dots = () => {
  return (
    <div className="relative grid mx-auto my-8 place-content-center overflow-clip max-w-fit">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 20;
const GRID_HEIGHT = 30;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 3, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -10, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-[1px] transition-colors hover:bg-teal-500"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="w-3 h-3 rounded-full dot-point bg-gradient-to-b from-cyan-700 to-cyan-400 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default Dots;
