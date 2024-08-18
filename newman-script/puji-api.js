const newman = require("newman");

newman.run({
  collection: "json-collection/puji-using-env.postman_collection.json",
  environment: "json-env/puji.postman_environment.json",
  reporters: ["cli", "htmlextra"],
});
