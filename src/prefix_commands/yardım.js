const { PrefixCommand } = require('../BASE.js');
const { EmbedBuilder, InteractionCollector, SlashCommandBuilder, ButtonStyle, Discord, MessageActivityType } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder } = require('discord.js')
const config = require('../config/config.js')
const ms = require("ms")
const db = require("croxydb")
const os = require(`os`);
const apii = require("useful-tools")
class HelpCommand extends PrefixCommand {
    constructor(client) {
        super(client, {
            commands: ['yardım', 'y', 'help']
        });
    }
    async execute(message) {
    const args = message.content.split(" ")

let member = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
let avatarURL = member.displayAvatarURL({size: 1024, dynamic: true})
let avatarURL2 = member.displayAvatarURL({size: 2048, dynamic: true})
        
const row = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setLabel('Davet Et')
.setEmoji('1112048205866205296')
.setStyle(ButtonStyle.Link)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=1112046846446141562&permissions=8&scope=bot%20applications.commands`),
new ButtonBuilder()
.setLabel('Destek Sunucusu')
.setEmoji('1112048112949788742')
.setStyle(ButtonStyle.Link)
.setURL(`https://discord.gg/n9UhyQRcdG`),
new ButtonBuilder()
.setLabel('Web Site')
.setEmoji('1112046281846694009')
.setStyle(ButtonStyle.Link)
.setURL(`https://discord.gg/n9UhyQRcdG`),
)


const embed = new EmbedBuilder()
.setColor('#f1c335')
.setAuthor({name: `Meksy.js | Avatar`, iconURL: client.user.avatarURL(),})
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setDescription(`> __*Bot Demo Sürümünde Olduğu İçin Bu Yardım Komutu Bir Süre Bizimle Olucaktır Ardından Bu Yardım Menüsünün 3 Katı Güzel Olan Bir Yardım Menüsü Yapılacaktır.*__
\`\`\`ini\n[ Savaş Komutları ]\`\`\`
**
?savaş-bilgi
?savaş-isim \`[SAVAŞTAKİ İSMİN]\`
?savaş-ülke \`[ÜLKE İSMİN]\`
?savaş
**
\`\`\`diff\n- Diğer Komutlar\`\`\`
**
?deprem
?avatar
?kurallar
?sunucu-bilgi
**
\`\`\`          \`\`\`
`)
.setTimestamp()
await message.channel.send({ embeds: [embed], components: [row] })

    }
}

module.exports = HelpCommand;