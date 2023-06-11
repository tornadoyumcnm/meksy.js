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
            commands: ['sunucu-bilgi', 'sunucubilgi', 'sb']
        });
    }
    async execute(message) {

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

const owner = message.guild.members.cache.get(message.guild.ownerId);

const embed = new EmbedBuilder()
.setColor('#f1c335')
.setURL('https://discord.com/api/oauth2/authorize?client_id=1112046846446141562&permissions=8&scope=bot%20applications.commands')
.setAuthor({name: `Meksy.js | Sunucu Bilgi`, iconURL: client.user.avatarURL(),})
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setTimestamp()
.setDescription(`> Güncelleme Mevzusu Yakında Geliyor...`)
.addFields(
{ name: `<:785802249329967125:1112048145254322239> Sunucu Sahibi`, value: `\`\`\`arm\n${owner.user.tag}\`\`\``, inline: true },
{ name: `<:702556265909321840:1112046250834018375> Toplam Üye`, value: `\`\`\`arm\n  ${message.guild.members.cache.size} Üye\`\`\``, inline: true },
{ name: `<:784697402085867522:1112048362519285872> Toplam Botlar`, value: `\`\`\`arm\n  ${message.guild.members.cache.filter(m => m.user.bot).size} Bot\`\`\``, inline: true },
{ name: `<:798136309309767713:1112046283486675004> Emoji Sayısı`, value: `\`\`\`arm\n  ${message.guild.emojis.cache.size} Emoji\`\`\``, inline: true },
{ name: `<:785793066539548712:1112046265597964289> Rol Sayısı`, value: `\`\`\`arm\n  ${message.guild.roles.cache.size} Rol\`\`\``, inline: true },
{ name: `<:791021823562743858:1112046237311574117> Sunucu Kurulma Tarihi:`, value: `\`\`\`ini\n[${apii.tarih(message.guild.createdTimestamp)}]\`\`\``, inline: true },
)
await message.channel.send({ embeds: [embed], components: [buttonlar] })

    }
}

module.exports = HelpCommand;