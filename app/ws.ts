import {
  defineEventHandler,
  defineNodeListener,
  defineWebSocket,
} from 'vinxi/http';

export const socket = defineWebSocket({
  open(peer) {
    peer.publish('test', `User ${peer} has connected!`);
    peer.send('You have connected successfully!');
    peer.subscribe('test');

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (peer as any).token = 'test-1';

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    console.log((peer as any).token);
  },
  async message(peer, msg) {
    const message = msg.text();
    console.log('msg', peer.id, message);
    peer.publish('test', message);
    peer.send('Hello to you!');
  },
  async close(peer, details) {
    peer.publish('test', `User ${peer} has disconnected!`);
    console.log('close', peer.id, details.reason);
  },
  async error(peer, error) {
    console.log('error', peer.id, error);
  },
});

export default defineEventHandler({
  handler() {},
  websocket: socket,
});
