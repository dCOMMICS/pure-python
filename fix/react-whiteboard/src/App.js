import { useMap } from "./liveblocks.config";

import "./App.css";

export default function App() {
  const shapes = useMap("shapes");

  if (shapes == null) {
    return <div className="loading">Loading</div>;
  }

  return <Canvas shapes={shapes} />;
}

function Canvas({ shapes }) {
  return (
    <>
      <div className="canvas">
        {Array.from(shapes, ([shapeId, shape]) => {
          return <Rectangle key={shapeId} shape={shape} />;
        })}
      </div>
    </>
  );
}

const Rectangle = ({ shape }) => {
  const { x, y, fill } = shape;

  return (
    <div
      className="rectangle"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill ? fill : "#CCC",
      }}
    ></div>
  );
};