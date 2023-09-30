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

// import { createClient } from "@liveblocks/client";
// import { createRoomContext } from "@liveblocks/react";

// const client = createClient({
//   publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
// });

// export const { RoomProvider, useOthers, useMyPresence, useMap, useHistory } =
//   createRoomContext(client);

// import { createClient } from "@liveblocks/client";
// import { createRoomContext } from "@liveblocks/react";

// const client = createClient({
//   publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
// });

// export const {
//   RoomProvider,
//   useOthers,
//   useMyPresence,
//   useMap,
//   useHistory,
//   useBatch,
// } = createRoomContext(client);

// import { createClient } from "@liveblocks/client";
// import { createRoomContext } from "@liveblocks/react";

// const client = createClient({
//   publicApiKey: "pk_dev_0ScUkUr8OnTlJJxHBnyxIez0wK73iQhFSMmfuG6UMh32f2RwAJFqWXNuZg_dQ3Og",
// });

// export const {
//   RoomProvider,
//   useOthers,
//   useMyPresence,
//   useMap,
//   useHistory,
//   useBatch,
//   useRoom,
// } = createRoomContext(client);

import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_m-45O96qzAZfzkGPN0iHx89hcaZvyXIz__R-068wScX37JT51MjWAXlGYV3dspro",
});

type Presence = {};
type Storage = {};
type UserMeta = {};
type RoomEvent = {};

export const {
  suspense: {
    // RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client);
