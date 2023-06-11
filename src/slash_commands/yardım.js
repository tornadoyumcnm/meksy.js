const { SlashCommand } = require('../BASE.js');
const { EmbedBuilder, InteractionCollector, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const Discord = require("discord.js");
const client = require("discord.js");
const cache = require("discord.js");
const ze = require("croxydb")
const os = require(`os`);

class HelpCommands extends SlashCommand {
  constructor(client){
    super(client, {
        name: 'yardım',
        slashOptions : new SlashCommandBuilder()
        .setName('yardım')
        .setDescription('yardım menüsüdür.')
    });
  }
async execute ( interaction ) {
let kisi = interaction.user
let sayi = ze.get(`kumar_${kisi.id}`)
const embed = new EmbedBuilder()
.setColor("Random")
.setTitle('Meksy.js | Yardım Menüsü')
.setDescription(`>>> slash kullanmıyoruz bunun yerine ?yardım
yazarak komutlara erişebilirsin!`)
.setFooter({ text: `slash Kullanmıyoruz | Bunun Yerine ?yardım.` })
.setTimestamp()
await interaction.reply({ embeds: [embed], ephemeral: true });
  }
}

module.exports = HelpCommands;