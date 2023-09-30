/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import { useMap, useMyPresence, useOthers } from "./liveblocks.config";

// /* ... */

// function Canvas({ shapes }) {
//   const [{ selectedShape }, setPresence] = useMyPresence();
//   const others = useOthers();

//   /* ... */

//   const onShapePointerDown = (e, shapeId) => {
//     setPresence({ selectedShape: shapeId });
//   };

//   return (
//     <>
//       <div className="canvas">
//         {Array.from(shapes, ([shapeId, shape]) => {
//           let selectionColor =
//             selectedShape === shapeId
//               ? "blue"
//               : others
//                   .toArray()
//                   .some((user) => user.presence?.selectedShape === shapeId)
//               ? "green"
//               : undefined;
//           return (
//             <Rectangle
//               key={shapeId}
//               shape={shape}
//               id={shapeId}
//               onShapePointerDown={onShapePointerDown}
//               selectionColor={selectionColor}
//             />
//           );
//         })}
//       </div>
//       <div className="toolbar">
//         <button onClick={insertRectangle}>Rectangle</button>
//       </div>
//     </>
//   );
// }

// const Rectangle = ({ shape, id, onShapePointerDown, selectionColor }) => {
//   const { x, y, fill } = shape;

//   return (
//     <div
//       onPointerDown={(e) => onShapePointerDown(e, id)}
//       className="rectangle"
//       style={{
//         transform: `translate(${x}px, ${y}px)`,
//         backgroundColor: fill ? fill : "#CCC",
//         borderColor: selectionColor || "transparent",
//       }}
//     ></div>
//   );
// };

import { useEffect, useState } from "react";
import {
  useMap,
  useMyPresence,
  useOthers,
  useHistory,
} from "./liveblocks.config";

/* ... */

function Canvas({ shapes }) {
  const history = useHistory();

  /* ... */

  const onShapePointerDown = (e, shapeId) => {
    e.stopPropagation();

    setPresence({ selectedShape: shapeId }, { addToHistory: true });

    setIsDragging(true);
  };

  const onCanvasPointerUp = (e) => {
    if (!isDragging) {
      setPresence({ selectedShape: null }, { addToHistory: true });
    }

    setIsDragging(false);
  };

  /* ... */

  return (
    <>
      {/* ... */}
      <div className="toolbar">
        {/* ... */}
        <button onClick={history.undo}>Undo</button>
        <button onClick={history.redo}>Redo</button>
      </div>
    </>
  );
}

/* Rectangle */

const Rectangle = ({ shape, id, onShapePointerDown, selectionColor }) => {
  const { x, y, fill } = shape;

  return (
    <div
      onPointerDown={(e) => onShapePointerDown(e, id)}
      className="rectangle"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill? fill : "#CCC",
        borderColor: selectionColor || "transparent",
      }}
    ></div>
  );
};

// pause and resume //

const onShapePointerDown = (e, shapeId) => {
  // eslint-disable-next-line no-restricted-globals
  history.pause();
  e.stopPropagation();

  setPresence({ selectedShape: shapeId }, { addToHistory: true });

  setIsDragging(true);
};

const onCanvasPointerUp = (e) => {
  if (!isDragging) {
    setPresence({ selectedShape: null }, { addToHistory: true });
  }

  setIsDragging(false);

  history.resume();
};


