// import { defineWebSocket, eventHandler } from "vinxi/http";
import { partyHandler } from 'vinxi/party';

export default partyHandler({
  onConnect(party, conn) {
    console.log(party);
    conn.send('Hello from the server!');
    party.broadcast(
      `Hello from the server party onConnect!${[...party.getConnections()].map((c) => c.id).join(',')}`,
    );
  },
  onMessage(party, message, connection) {
    connection.send('Message from the server: connection!');
    party.broadcast(`Message from server: broadcast ${message}`);
  },
});
