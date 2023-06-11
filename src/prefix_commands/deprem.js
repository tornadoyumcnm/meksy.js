const { PrefixCommand } = require('../BASE.js');
const { EmbedBuilder, Colors, InteractionCollector, SlashCommandBuilder, ButtonStyle, Discord, MessageActivityType } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder } = require('discord.js')
const config = require('../config/config.js')
const axios = require('axios');
const ms = require("ms")
const db = require("croxydb")
const os = require(`os`)
const moment = require('moment');
require("moment-duration-format");
class HelpCommand extends PrefixCommand {
    constructor(client) {
        super(client, {
            commands: ['deprem']
        });
    }
    async execute(message) {
const args = message.content.split(" ")
    

moment.locale('tr')

    axios({
        method: "get",
        url: "https://api.orhanaydogdu.com.tr/deprem/live.php?limit=1",
      }).then(function (response) {
        let color =
        `${response?.data?.result?.map((x) => x.mag)}` > "3" &&
        `${response?.data?.result?.map((x) => x.mag)}` < "5"
        ? Colors.Yellow
        : `${response?.data?.result?.map((x) => x.mag)}` > "5"
        ? Colors.Red
        : Colors.Green;
        if (response.data.status === false)
        return message.reply("API Kaynaklı gösteremiyorum");

        const embed = new EmbedBuilder()
        .setAuthor({name: `Meksy.js | Deprem Bilgi`, iconURL: client.user.avatarURL(),})
        .setColor(Colors.Yellow)
        .addFields(
        { name: `<:785834647967105034:1112046269272170536> Büyüklük`, value: `\`\`\`arm\n${response?.data?.result?.map((x) => x.mag)}\`\`\``, inline: true},
        { name: `<:768793553911676968:1112046258824163418> Derinlik`, value: `\`\`\`arm\n${response?.data?.result?.map((x) => x.depth)}\`\`\``, inline: true},
        { name: `<:785467451240218626:1112048110806499430> Koordinatlar`, value: `\`\`\`arm\n${response?.data?.result?.map((x) => x.geojson.coordinates)}\`\`\``, inline: true},
        { name: `<:798868501254897674:1112046278948421725> Tarih`, value: `\`\`\`arm\n${response?.data?.result?.map((x) => x.date)}\`\`\``, inline: true},
        { name: `<:785469241016975410:1112046263798616115> Yer`, value: `\`\`\`arm\n${response?.data?.result?.map((x) => x.title)}\`\`\``, inline: true},
        )
        .setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
        .setTimestamp()
        return message.channel.send({ embeds: [embed] })

      });

    }
}

module.exports = HelpCommand;