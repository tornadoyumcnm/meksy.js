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
            commands: ['kaçcm', 'kaç-cm']
        });
    }
    async execute(message) {
const args = message.content.split(" ")

const random = Math.floor(Math.random() * 99) + 1

const embed = new EmbedBuilder()
.setAuthor({name: `${message.author.tag}`, iconURL: client.user.avatarURL(),})
.setDescription(`<@${message.author.id}> **Malafatın __${random}CM__** 🍆`)  
.setImage(`https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWQ2ODI3NDc3MGExMWJmMGM5M2VhYjgxNWFlODllYTJmOGVhODcxNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/DlDJpkx2D9VzJIQE31/giphy.gif`)
.setColor("#2b2d31")
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setTimestamp()
await message.channel.send({ embeds: [embed] })

    }
}

module.exports = HelpCommand;