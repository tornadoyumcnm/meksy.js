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
            commands: ['savaş-bilgi', 'savaşbilgi']
        });
    }
async execute(message) {
const args = message.content.split(" ")

let kisi = client.user
let sayi = await db.fetch(`kumar_${kisi.id}`) || "0"
const veri = await db.fetch("komutk_"+message.author.id) || "0"
let Savaşİsim = await db.fetch(`savaşisim_${message.author.id}`) || "İsmi Bulunmamakta"
let savaşülke = await db.fetch(`savaşülke_${message.author.id}`) || "Ülke Bulunmamakta"

const embed = new EmbedBuilder()
.setColor('#f1c335')
.setAuthor({name: `${Savaşİsim}Bilgiler`, iconURL: message.author.avatarURL(),})
.addFields(
{ name: `<a:coin:1113102362068918302> Toplam Paran`, value: `\`\`\`arm\n${sayi}\`\`\``, inline: true},
{ name: `<:icons_flag:1113618250824171572> Savaştaki Ülken`, value: `\`\`\`diff\n- ${savaşülke}\`\`\``, inline: true},
{ name: `<:702074297312739438:1112048209552998421> Savaştaki İsmin`, value: `\`\`\`arm\n${Savaşİsim}\`\`\``, inline: true},
{ name: `<:785469241016975410:1112046263798616115> Toplam Savaşın`, value: `\`\`\`arm\n${veri}\`\`\``, inline: true},

)
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setTimestamp()
await message.channel.send({ embeds: [embed] })
    }
}

module.exports = HelpCommand;