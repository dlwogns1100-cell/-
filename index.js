console.log("BOT FILE START");

require("dotenv").config();

console.log(
  "TOKEN CHECK:",
  process.env.TOKEN ? "있음" : "없음"
);
