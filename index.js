require("dotenv").config();

console.log("길이:", process.env.TOKEN?.length);
console.log("앞:", process.env.TOKEN?.slice(0,5));
console.log("뒤:", process.env.TOKEN?.slice(-5));

process.exit();
