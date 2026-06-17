require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events
} = require("discord.js");


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});


client.once(Events.ClientReady, (c) => {
  console.log(`✅ ${c.user.tag} 온라인`);
});


client.on(Events.MessageCreate, async (message) => {

  if (message.author.bot) return;


  if (!message.content.includes("/")) return;


  const text = message.content;


  await message.delete().catch(() => {});


  await message.channel.send(
`${message.member?.displayName || message.author.username}님 작성

${text}`
  );

});


client.login(process.env.TOKEN)
.catch(err => {
  console.log("❌ 로그인 실패");
  console.log(err.message);
});
