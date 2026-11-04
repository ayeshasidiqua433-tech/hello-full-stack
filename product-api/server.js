const app = require("./app");
const config = require("./config/config");

app.listen(config.port, () => {
  console.log(`Server chal raha hai: http://localhost:${config.port} (${config.nodeEnv})`);
});