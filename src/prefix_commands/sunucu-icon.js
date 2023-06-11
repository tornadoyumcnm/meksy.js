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
            commands: ['sunucu-icon', 'sunucuicon']
        });
    }
    async execute(message) {
const args = message.content.split(" ")

var serverIcon = message.guild.iconURL({size: 2048, dynamic: true}) || `https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzU2MWJiZmE5ZDU5NzAzY2RiNWRiODI3ZmUxZGM0M2JkMTdlZjljZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/rxh61B9pMAdZXp8jH1/giphy.gif`

message.reply(`${serverIcon}`)

    }
}

module.exports = HelpCommand;