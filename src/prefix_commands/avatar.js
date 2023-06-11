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
            commands: ['avatar', 'av']
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
.setLabel('2048 Avatar')
.setEmoji('1112046258824163418')
.setStyle(ButtonStyle.Link)
.setURL(avatarURL2),
new ButtonBuilder()
.setLabel('1024 Avatar')
.setEmoji('1112048359830736927')
.setStyle(ButtonStyle.Link)
.setURL(avatarURL),
)

const embed = new EmbedBuilder()
.setColor('#f1c335')
.setAuthor({name: `Meksy.js | Avatar`, iconURL: client.user.avatarURL(),})
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setImage(`${avatarURL2}`)
.setTimestamp()
await message.channel.send({ embeds: [embed], components: [row] })

    }
}

module.exports = HelpCommand;