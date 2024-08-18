const newman = require("newman");

newman.run({
  collection: "json-collection/puji.postman_collection.json",
  environment: "json-env/puji.postman_environment.json",
  reporters: ["cli", "htmlextra"],
});
