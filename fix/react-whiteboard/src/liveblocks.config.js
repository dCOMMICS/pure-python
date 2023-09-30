// import { createClient } from "@liveblocks/client";

// const client = createClient({
//   publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
// });

// import { createClient } from "@liveblocks/client";
// import { createRoomContext } from "@liveblocks/react";

// const client = createClient({
//   publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
// });

// export const { RoomProvider, useMap } = createRoomContext(client);

import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
});

export const { RoomProvider, useOthers, useMyPresence, useMap, useHistory } =
  createRoomContext(client);

