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
            commands: ['sunucu-banner', 'sunucubanner']
        });
    }
    async execute(message) {
const args = message.content.split(" ")

var serverBanner = message.guild.bannerURL({size: 2048, dynamic: true}) || `https://media0.giphy.com/media/pLDpMGoFDDh8P3Yu3X/giphy.gif`

message.reply(`${serverBanner}`)

    }
}

module.exports = HelpCommand;