require("dotenv").config();

const { 
  Client, 
  GatewayIntentBits, 
  Events,
  EmbedBuilder
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});


// 봇 시작
client.once(Events.ClientReady, (c) => {
  console.log(`✅ ${c.user.tag} 접속 완료`);
});


// 명령어 처리
client.on(Events.MessageCreate, async (message) => {

  // 봇 메시지 무시
  if (message.author.bot) return;


  // 예약 등록
  if (message.content.startsWith("!예약")) {

    const args = message.content.split(" ");

    if (args.length < 3) {
      return message.reply(
        "사용법: `!예약 날짜 시간 내용`\n예) `!예약 6/20 21:00 레이드`"
      );
    }


    const date = args[1];
    const time = args[2];
    const content = args.slice(3).join(" ");


    const embed = new EmbedBuilder()
      .setTitle("📅 예약 등록")
      .addFields(
        { name: "날짜", value: date },
        { name: "시간", value: time },
        { name: "내용", value: content || "없음" }
      )
      .setTimestamp();


    message.channel.send({
      embeds: [embed]
    });

  }


  // 예약 확인
  if (message.content === "!예약목록") {

    message.reply(
      "📋 현재 예약 목록 기능 준비중"
    );

  }


});


client.login(process.env.TOKEN);
