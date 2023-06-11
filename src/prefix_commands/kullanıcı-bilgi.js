const { PrefixCommand } = require('../BASE.js');
const { EmbedBuilder, InteractionCollector, SlashCommandBuilder, ButtonStyle, Discord, MessageActivityType } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder } = require('discord.js')
const config = require('../config/config.js')
const ms = require("ms")
const db = require("croxydb")
const os = require(`os`);
const apii = require("useful-tools")
const moment = require('moment')
require('moment-duration-format')
class HelpCommand extends PrefixCommand {
    constructor(client) {
        super(client, {
            commands: ['kullanıcı-bilgi', 'kullanıcıbilgi', 'kb']
        });
    }
    async execute(message) {
const args = message.content.split(" ")

/*/new ButtonBuilder()
.setCustomId('Secondary')
.setLabel('🔎')
.setStyle(ButtonStyle.Secondary),/*/

let buttonlar = new ActionRowBuilder().addComponents(
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

moment.locale('tr')
let member = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;

const embed = new EmbedBuilder()
.setColor('#f1c335')
.setURL('https://discord.com/api/oauth2/authorize?client_id=1112046846446141562&permissions=8&scope=bot%20applications.commands')
.setAuthor({name: `Meksy.js | Sunucu Bilgi`, iconURL: client.user.avatarURL(),})
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setTimestamp()
.addFields(
{ name: `<a:leaf_left:1113100137821118535> Kullanıcı İsmi <a:leaf_right:1113100132704059393>`, value: `${message.author.tag}`, inline: true },
{ name: `<:778582476427755550:1112048205866205296> Sunucuya Katılım T.`, value: `${moment(member.joinedTimestamp).format('MMMM, dddd, Do/YYYY | h:mm:ss ')}`, inline: true },
{ name: `<:702556265909321840:1112046250834018375> Discorda Katılım T.`, value: `<t:${Math.floor(new Date(member.createdTimestamp) / 1000)}:R>`, inline: true },
{ name: `<:769905583103934484:1112046429041610772> Sunucudaki Rollerin`, value: `${message.member.roles.cache.map(cs => cs).join(", ")}`, inline: true },
)
await message.channel.send({ embeds: [embed], components: [buttonlar] })

    }
}

module.exports = HelpCommand;