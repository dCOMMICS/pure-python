import { useMap } from "./liveblocks.config";

import "./App.css";

const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  return COLORS[getRandomInt(COLORS.length)];
}

/* App */

function Canvas({ shapes }) {
  const insertRectangle = () => {
    const shapeId = Date.now().toString();
    const rectangle = {
      x: getRandomInt(300),
      y: getRandomInt(300),
      fill: getRandomColor(),
    };
    shapes.set(shapeId, rectangle);
  };

  return (
    <>
      <div className="canvas">
        {Array.from(shapes, ([shapeId, shape]) => {
          // eslint-disable-next-line react/jsx-no-undef
          return <Rectangle key={shapeId} shape={shape} />;
        })}
      </div>
      <div className="toolbar">
        <button onClick={insertRectangle}>Rectangle</button>
      </div>
    </>
  );
}

/* Rectangle */