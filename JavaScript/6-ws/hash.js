'use strict';

const crypto = require('node:crypto');

const hash = (password) => new Promise((resolve, reject) => {
  const salt = crypto.randomBytes(16).toString('base64');
  crypto.scrypt(password, salt, 64, (err, result) => {
    if (err) reject(err);
    const hash = result.toString('base64');
    resolve(`${salt}:${hash}`);
  });
});

module.exports = hash;
