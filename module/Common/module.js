const log = (msg) => {
  console.log(`Log CommonJS: ${msg}`);
};

const info = (msg) => {
  console.log(`Info CommonJS: ${msg} - ${abc}`);
};

module.exports = { log, info };
