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
      commands: ['savaş-ülke', 'savaşülke']
    });
  }
  async execute(message) {
    const args = message.content.split(" ")

    const yazi2 = message.content.split(' ').slice(1).join(' ');

    if (!yazi2)
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setAuthor({ name: `Başarısız Oldu!`, iconURL: client.user.avatarURL(), })
            .setDescription(`Bir **Ülke** ismi yazmayı unuttunuz.

> **Not:** Bot Her Türlü Yazıya Açık İstediğiniz Ülkeyi Yazabilirsiniz.`)
            .setImage('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWIzM2VkYzUwNTRiZWM4M2ZlNGMwNTU4YzhiMzg4NTk3ZmQ4NzkxZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/7S1A8DXrNtYVpG8bh2/giphy.gif')
            .setFooter({ text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
            .setTimestamp()
        ]
      })

    const embed = new EmbedBuilder()
      .setColor('#f1c335')
      .setAuthor({ name: `Başarılı Oldu!`, iconURL: client.user.avatarURL(), })
      .setDescription(`Başarıyla savaştaki ülkeni: **${yazi2}** olarak seçtiniz!`)
      .setImage('https://media4.giphy.com/media/5W5xY5tOpKgUnhO5ss/giphy.gif')
      .setFooter({ text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
      .setTimestamp()
    await message.channel.send({ embeds: [embed] })

    db.set(`savaşülke_${message.author.id}`, yazi2 + ' ')

  }
}

module.exports = HelpCommand;