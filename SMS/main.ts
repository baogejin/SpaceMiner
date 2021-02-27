// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.

import { WebSocket, acceptWebSocket, isWebSocketCloseEvent, isWebSocketPingEvent, serve } from "./deps.ts";
import { Player } from "./Player.ts";

async function handleWs(sock: WebSocket) {
    console.log("socket connected!");
    let player: Player = new Player(sock);

}

if (import.meta.main) {
    /** websocket echo server */
    const port = "6502";
    console.log(`websocket server is running on :${port}`);
    for await (const req of serve(`:${port}`)) {
        const { conn, r: bufReader, w: bufWriter, headers } = req;
        acceptWebSocket({
            conn,
            bufReader,
            bufWriter,
            headers,
        })
            .then(handleWs)
            .catch(async (err) => {
                console.error(`failed to accept websocket: ${err}`);
                await req.respond({ status: 400 });
            });
    }
}