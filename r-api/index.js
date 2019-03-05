const app = require("./app.js");
const logger = require("./services/logger");

app.listen(3000, () => {
  logger.info(`Rtour api running on localhost:3000 !`);
});
