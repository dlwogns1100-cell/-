require("dotenv").config();

console.log("ENV KEYS:");
console.log(Object.keys(process.env));

console.log(
  "TOKEN 존재:",
  process.env.TOKEN
);

process.exit();
