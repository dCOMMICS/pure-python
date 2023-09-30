// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// import { RoomProvider } from "./liveblocks.config";

// ReactDOM.render(
//   <React.StrictMode>
//     <RoomProvider id="react-whiteboard-app" initialPresence={{}}>
//       <App />
//     </RoomProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { LiveMap } from "@liveblocks/client";
import { RoomProvider } from "./liveblocks.config";

// eslint-disable-next-line no-undef
const client = createClient({
  publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
});

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider
      id="react-whiteboard-app"
      initialPresence={{}}
      initialStorage={{
        shapes: new LiveMap(),
      }}
    >
      <App />
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);