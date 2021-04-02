'use strict';

const receiveArgs = async (req) => {
  const buffers = [];
  for await (const chunk of req) buffers.push(chunk);
  return Buffer.concat(buffers).toString();
};

module.exports = receiveArgs;
