require("dotenv").config();

console.log("TOKEN:", process.env.TOKEN ? "있음" : "없음");
console.log("LENGTH:", process.env.TOKEN?.length);

process.exit(0);
