// src/server.js
const app = require('./app');
const HOST = require('./src/util/getip');
const PORT = process.env.PORT || 5000;

app.listen(PORT, HOST, () => {
  console.log(`Many-Stack backend is running at http://${HOST}:${PORT}`);
});
