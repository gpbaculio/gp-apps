const { printSchema } = require("graphql");
const fs = require("fs");
const path = require("path");
const schema = require("../schema");

const graphQLSchema = printSchema(schema);

const schemaPath = path.join(__dirname, "../../filsari", "schema.graphql");
fs.writeFile(schemaPath, graphQLSchema, (err) => {
  if (err) {
    console.error("Error writing schema to file:", err);
  } else {
    console.log("Schema generated: schema.graphql");
  }
});
