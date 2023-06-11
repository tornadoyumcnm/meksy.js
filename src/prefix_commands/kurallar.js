const { PrefixCommand } = require('../BASE.js');
const { WebhookClient, EmbedBuilder, InteractionCollector, SlashCommandBuilder, ButtonStyle, Discord, AttachmentBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder } = require('discord.js')
const config = require('../config/config.js')
const ms = require("ms")
const db = require("croxydb")
class HelpCommand extends PrefixCommand {
  constructor(client) {
    super(client, {
      commands: ['kurallar', 'rules']
    });
  }
  async execute(message) {
    const args = message.content.split(" ")


    if (!message.member.permissions.has("0x0000000000000008"))
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor("DarkRed")
            .setTitle(`Bir hata oldu!`)
            .setDescription(`• \`${config.prefix}kurallar2\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)
            .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({ dynamic: true }) : 'https://cdn.discordapp.com/attachments/1098583690495398011/1098583722720235550/Mekadon2.png')
        ]
      }).then(async (a) => {
        setTimeout(async () => {
          a.delete()
        }, 10000)
      })

message.channel.send(`📢 **${message.guild.name} | Sunucu Kurallar**

\`→\` **Reklam** Sunucu **İçi** Yasaktır. **(Yetkililere bildirmelisiniz.)**
\`→\` **Ses** & **Chat** odalarında **Küfür**, **Troll**, **Rahatsız** etmek & **Bass** Yasaktır.
\`→\` Kişisel sorunlarınızı **sunucuya** taşımak, Düzeni **bozmak**, Çıkan **tartışmayı** uzatmak Yasaktır.
\`→\` **Din**, **dil**, **ırk**, Cinsiyetçilik ayrımı Yasak.
\`→\` **Cinsel içerikli** görseller paylaşmak Yasaktır.
\`→\` **Spam**, **flood** ve **caps** Yasaktır.

\`¤\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**
    
> __*Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.*__`)
message.channel.send(`https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDA5YjY2NzA1OTQ3MWZkNmNmODgxOTc5MzRiZGRhODZlNDVjY2Q4ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/AHpTlFxAcQPJjXc3bp/giphy.gif`)
message.delete()
  }
}

module.exports = HelpCommand;