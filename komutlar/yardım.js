const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle(" ErenLeos  Bot | Yardım Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔════════════════════════════════════╗
║**»** **!ban** 
║**»** **!kick** 
║**»** **!sil** 
║**»** **!küfür-engel**
║**»** **!emoji-ekle** 
║**»** **!profil** 
║**»** **!ping** 
║**»** **!nuke** 
║**»** **!sa-as** 
║**»** **!sunucu-kur** 
║**»** **!avatar** 
║**»** **!ara155** 
║**»** **!normal-sunucu-kur** 
║**»** **!yılbaşı** 
║**»** **!trump** 
║**»** **!yavaş-mod** 
║**»** **!yazı-tura** 
║**»** **!woman-gif** 
║**»** **!animal-gif** 
║**»** **!anime-gif** 
║**»** **!banner-yazı** 
║**»** **!desteksunucu** 
║**»** **!dm-mesaj** 
║**»** **!abone** 
║**»** **!abonekanalı** 
║**»** **!abonerol** 
║**»** **!abonesistemkapat** 
║**»** **!abone-stats** 
║**»** **!abone-stats** 
║**»** **!abonestatssıfırla** 
║**»** **!aboneyetkilisi** 
║**»** **!afk** 
v

╚════════════════════════════════════╝
`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=843886762207871019&scope=bot&permissions=8589934591&response_type=code) **|** [Destek Sunucusu](https://discord.gg/x7NwmcyD) **|** [Youtube](https://www.youtube.com/channel/UCjj71_-eeDF-te3b_pP7qeQ/) :ate:`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["y","yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };
