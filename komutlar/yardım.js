const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`FlowArt Chat Koruma`)
.setDescription(`

Bir komut hakkında bilgi almak için \`a!help <komut adı>\`

\`a!ping\`:  **Pinginizi Ölçüp Atar**
\`a!temizle\`:  **Mesaj temizleme**
\`a!istatistik\`:  **Botun İstatistiklerini Atar**

**Sohbet Filtreleri**

\`a!capslock-engelleme\`:  **Capslock filtresi**
\`a!küfür-engel\`:  **Küfür Engel Aç/Kapat**
\`a!reklam-engel\` :  **Reklam Engel Aç/Kapat**
\`a!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**

 **Bilgilendirme** 

 **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
 **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/aKG63Es)**
 **Komut hakkında detaylı bilgi için: z!yardım**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/36Vee3z)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=780553350856048681&scope=bot&permissions=8)** **•** 

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};