'use strict';

const { Server } = require('ws');

module.exports = (routing, port) => {
  const ws = new Server({ port });

  ws.on('connection', (connection, req) => {
    connection.on('message', async (message) => {
      const obj = JSON.parse(message);
      const { name, method, args = [] } = obj;
      const entity = routing[name];
      if (!entity) return connection.send('"Not found"');
      const handler = entity[method];
      if (!handler) return connection.send('"Not found"');
      console.log(`${req.socket.remoteAddress} ${name}.${method}`);
      try {
        const result = await handler(...args);
        connection.send(JSON.stringify(result.rows));
      } catch (err) {
        console.dir({ err });
        connection.send('"Server error"');
      }
    });
  });

  console.log(`API on port ${port}`);
};
