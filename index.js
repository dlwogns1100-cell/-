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


// 봇 접속
client.once(Events.ClientReady, (client) => {
  console.log(`✅ ${client.user.tag} 온라인`);
});


// 메시지 정리 기능
client.on(Events.MessageCreate, async (message) => {

  // 봇 메시지 무시
  if (message.author.bot) return;


  // "/" 포함된 신청글만 처리
  if (!message.content.includes("/")) return;


  const text = message.content;


  // 원본 삭제
  await message.delete().catch(() => {});


  // 다시 작성
  await message.channel.send(
`${message.member?.displayName || message.author.username}님 작성

${text}`
  );

});


client.login(process.env.TOKEN)
  .catch((err) => {
    console.log("❌ 로그인 실패");
    console.log(err.message);
  });
