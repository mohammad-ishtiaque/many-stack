// src/server.js
const app = require('./app');

const PORT = process.env.PORT_URL;

app.listen(PORT, () => {
  console.log(`🚐 RV SaaS backend is running on port ${PORT}`);
});
