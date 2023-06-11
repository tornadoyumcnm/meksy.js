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
      commands: ['savaş-isim', 'savaşisim', 'savaş-ismi', 'savaşismi', 'savaş-isimi', 'savaşisimi']
    });
  }
  async execute(message) {
    const args = message.content.split(" ")

    const yazi = message.content.split(' ').slice(1).join(' ');

    if (!yazi)
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setAuthor({ name: `Başarısız Oldu!`, iconURL: client.user.avatarURL(), })
            .setDescription(`Bir **İsim** ve ya **Kelime** yazmayı unuttunuz.`)
            .setImage('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdiODIwMDI2NDQyZjdjZmZiMDdjMTBhODNmYzJjMDlhNDE3YTlmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Yn1yqiOFQqBnEBJf6h/giphy.gif')
            .setFooter({ text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
            .setTimestamp()
        ]
      })

    const embed = new EmbedBuilder()
      .setColor('#f1c335')
      .setAuthor({ name: `Başarılı Oldu!`, iconURL: client.user.avatarURL(), })
      .setDescription(`Başarıyla savaştaki ismini: **${yazi}** olarak seçtiniz!`)
      .setImage('https://media4.giphy.com/media/5W5xY5tOpKgUnhO5ss/giphy.gif')
      .setFooter({ text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
      .setTimestamp()
    await message.channel.send({ embeds: [embed] })

    db.set(`savaşisim_${message.author.id}`, yazi + ' ')

  }
}

module.exports = HelpCommand;