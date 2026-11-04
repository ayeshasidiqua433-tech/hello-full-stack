const config = require("../config/config");

const apiKeyAuth = (req, res, next) => {
  const key = req.headers["x-api-key"];

  if (!key || key !== config.apiKey) {
    return res.status(401).json({ message: "Unauthorized: sahi API key do" });
  }

  next();
};

module.exports = apiKeyAuth;