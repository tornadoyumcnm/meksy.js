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
            commands: ['savaş']
        });
    }
    async execute(message) {
const args = message.content.split(" ")

let yetkili2 = db.fetch(`savaşülke_${message.author.id}`)
if (!yetkili2) return message.reply({ embeds: [
new EmbedBuilder()
.setAuthor({name: `İşlem Başarısız Oldu!`, iconURL: message.author.avatarURL(),})
.setDescription(`Bir Ülke İsmi Koyman Gerek!

> __Örnek:__ **?savaş-ülke [ÜLKEİSMİ]** Yaparak ülke alabilirsin.`)
.setImage('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdiODIwMDI2NDQyZjdjZmZiMDdjMTBhODNmYzJjMDlhNDE3YTlmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Yn1yqiOFQqBnEBJf6h/giphy.gif')
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setTimestamp()
]})

let yetkili = db.fetch(`savaşisim_${message.author.id}`)
if (!yetkili) return message.reply({ embeds: [
new EmbedBuilder()
.setAuthor({name: `İşlem Başarısız Oldu!`, iconURL: message.author.avatarURL(),})
.setDescription(`Bir Savaş İsmi Koyman Gerek!

> __Örnek:__ **?savaş-isim [İSİM]** Yaparak kayıt olabilirsin.`)
.setImage('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdiODIwMDI2NDQyZjdjZmZiMDdjMTBhODNmYzJjMDlhNDE3YTlmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Yn1yqiOFQqBnEBJf6h/giphy.gif')
.setFooter({  text: `Komutu Kullanan: ${message.author.tag}`, iconURL: message.author.avatarURL({}) })
.setTimestamp()
]})

let Savaşİsim = await db.fetch(`savaşisim_${message.author.id}`)
let savaşülke = await db.fetch(`savaşülke_${message.author.id}`)


const lastUsed2 = db.get(`${client.user.id}_lastUsed2`);
const now = Date.now();
if (lastUsed2 && now - lastUsed2 < 10000) {
/*/const remainingTime = Math.ceil((lastUsed2 + 10000 - now) / 10000);/*/
return message.reply({ embeds: [
new EmbedBuilder()
.setColor("Blurple")
.setDescription(`⏰ **5** Saniye sonra tekrar gel.`)
]});
}
db.set(`${client.user.id}_lastUsed2`, now);

  const tahmin = Math.floor(Math.random() * 99) + 1
  var para;
  var yorum; 
  var gif;
  
  if(tahmin <= 25) {
    para = `Savaşı Kaybettin!`
    yorum = "**-500** Coin Kaybettin."
    gif = `https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y1NzMyODRmZTRmNzgyNjY1ZjExMDhlOWY3MWUzNTQzODI2YmUxZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kcp4CaTLtDgFAlFrZZ/giphy.gif`
    let kisi = client.user
    db.add(`kumar_${kisi.id}`, -500)
    let sayi = db.get(`kumar_${kisi.id}`)
    if (sayi === null) sayi = 0;
  }
  
  if(tahmin >= 25) {
    para = `Savaşı Kaybettin!`
    yorum = "**-250** Coin Kaybettin."
    gif = `https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y1NzMyODRmZTRmNzgyNjY1ZjExMDhlOWY3MWUzNTQzODI2YmUxZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kcp4CaTLtDgFAlFrZZ/giphy.gif`
    let kisi = client.user
    db.add(`kumar_${kisi.id}`, -250)
    let sayi = db.get(`kumar_${kisi.id}`)
    if (sayi === null) sayi = 0;
  }
  
  if(tahmin >= 50) {
    para = `Savaşı Kazandın!`
    yorum = "**+500** Coin Kazandın!"
    gif = `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVjMDQyZWI3ZGFkYmM0NjkzZGM4OWYwODRkNmU2MjM2MjVmNWUwOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/aMXBChg7pXzomFFfw6/giphy.gif`
    let kisi = client.user
    db.add(`kumar_${kisi.id}`, 500)
    let sayi = db.get(`kumar_${kisi.id}`)
    if (sayi === null) sayi = 0;
  }
  
  if(tahmin >= 75) {
     para = `Savaşı Kazandın!`
     yorum = "**+750** Coin Kazandın!"
     gif = `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVjMDQyZWI3ZGFkYmM0NjkzZGM4OWYwODRkNmU2MjM2MjVmNWUwOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/aMXBChg7pXzomFFfw6/giphy.gif`
     let kisi = client.user
     db.add(`kumar_${kisi.id}`, 750)
     let sayi = db.get(`kumar_${kisi.id}`)
     if (sayi === null) sayi = 0;
  }

if(tahmin >= 85) {
para = `Savaşı Kazandın!`
yorum = "**+850** Coin Kazandın!"
gif = `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVjMDQyZWI3ZGFkYmM0NjkzZGM4OWYwODRkNmU2MjM2MjVmNWUwOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/aMXBChg7pXzomFFfw6/giphy.gif`
let kisi = client.user
db.add(`kumar_${kisi.id}`, 850)
let sayi = db.get(`kumar_${kisi.id}`)
if (sayi === null) sayi = 0;
}

if(tahmin === 100) {
para = `Savaşı Kazandın!`
yorum = "**+1000** Coin Kazandın!"
gif = `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVjMDQyZWI3ZGFkYmM0NjkzZGM4OWYwODRkNmU2MjM2MjVmNWUwOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/aMXBChg7pXzomFFfw6/giphy.gif`
let kisi = client.user
db.add(`kumar_${kisi.id}`, 1000)
let sayi = db.get(`kumar_${kisi.id}`)
if (sayi === null) sayi = 0;
}

const embed = new EmbedBuilder()
.setAuthor({name: `${savaşülke}& ${Savaşİsim}| ${para}`, iconURL: message.author.avatarURL(),})
.setDescription(`<a:coin:1113102362068918302> ${yorum}

> 5 Saniye Sonra Tekrar Dene!`)
.setThumbnail('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDdjZGE4ZWRjNWFjYjQzYWQzZjFiMGQ4NzM1YTQ1ZTAwNTBmNzZiOCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/F5vwOyWhgvPk5Jjo6f/giphy.gif')
.setImage(`${gif}`)
await message.reply({ embeds: [embed] });
db.add("komutk_"+message.author.id, 1)

    }
}

module.exports = HelpCommand;