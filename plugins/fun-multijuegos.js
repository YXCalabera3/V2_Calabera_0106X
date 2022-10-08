import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
//let com = `${usedPrefix}`
//let juegos = `${pickRandom([`${com}formarareja`,`${com}reto`,`${com}verdad`])}`   



const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
} 
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let mentionedJid = [who]
  let username = conn.getName(who)  
  
if (command == 'multijuegos') { 
  global.db.data.users[m.sender].limit += 1

              

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴', url: 'https://youtu.be/aPu9wQi-z8U'}},
{index: 2, urlButton: {displayText: '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', url: 'https://www.facebook.com/groups/-------/'}},
{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '.menu'}},
{index: 4, quickReplyButton: {displayText: '𝐄𝐒𝐓𝐀𝐃𝐎', id: '/estado'}},
{index: 5, quickReplyButton: {displayText: '𝐆𝐑𝐔𝐏𝐎𝐒 ️', id: '#grupos'}},
]
 
let t = {
text: global.wm,
footer: `𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) ${username}\n𝙅𝙪𝙚𝙜𝙖 𝙪𝙣𝙖 𝙂𝙧𝙖𝙣 𝙫𝙖𝙧𝙞𝙚𝙙𝙖𝙙 𝙙𝙚 𝙟𝙪𝙚𝙜𝙤𝙨!!`,
templateButtons: templateButtonsReplyMessage
  }
conn.sendMessage(m.chat, t, m)
}
  
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].money += 5
    let gata = `${pickRandom([`𝙋𝙪𝙚𝙙𝙚𝙨 𝙂𝙖𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙖𝙡 𝙅𝙪𝙜𝙖𝙧!!`,`𝙎𝙞𝙜𝙪𝙚 𝙟𝙪𝙜𝙖𝙣𝙙𝙤 𝙥𝙖𝙧𝙖 𝙜𝙖𝙣𝙖𝙧 hades𝘾𝙤𝙞𝙣𝙨!!`,`𝙎𝙖𝙗𝙞𝙖𝙨 𝙦𝙪𝙚 𝙥𝙪𝙚𝙙𝙚𝙨 𝙂𝙖𝙣𝙖𝙧 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 𝙖𝙡 𝙅𝙪𝙜𝙖𝙧? 𝘼𝙝𝙤𝙧𝙖 𝙮𝙖 𝙡𝙤 𝙨𝙖𝙗𝙚𝙨!!`])}`
             let c = `${usedPrefix}`
              let juegos = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}topgays`,`${c}topotakus`,`${c}mates medium`,`${c}mates noob`])}`
               let juegos2 = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}formarpareja`,`${c}ppt tijeras`,`${c}ppt piedra`])}`
                let juegos3 = `${pickRandom([`${c}gay`,`${c}ppt papel`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                 let emojis1 = `${pickRandom([`🦁`,`🐮`,`🦖`,`👻`,`🐈`,`🐆`,`🐅`,`🐒`])}`
                  let emojis2 = `${pickRandom([`💟`,`☮️`,`☪️`,`☯️`,`🕉️`,`☸️`,`✡️`,`🔯`])}`
                   let emojis3 = `${pickRandom([`🛸`,`🚁`,`🚀`,`🧠`,`✈️`,`🚤`,`🚢`,`🚗`])}`
              

              let ss = await `❍͜͡➣CHICA_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|CALABERA `

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴', url: 'https://youtu.be/aPu9wQi-z8U'}},
{index: 2, urlButton: {displayText: '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', url: 'https://www.facebook.com/groups/'}},
{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '.menu'}},
{index: 4, quickReplyButton: {displayText: '𝐄𝐒𝐓𝐀𝐃𝐎', id: '/estado'}},
{index: 5, quickReplyButton: {displayText: '𝐆𝐑𝐔𝐏𝐎𝐒 ️', id: '#grupos'}},
]
 
let tt = {
text: ss,
footer: gata,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, tt, m)
} 
    
  
 if (command == 'juegos') {
   global.db.data.users[m.sender].money += 10
   let gata = `${pickRandom([`𝘿𝙚𝙢𝙪𝙚𝙨𝙩𝙧𝙖 𝙦𝙪𝙚 𝙥𝙪𝙚𝙙𝙚𝙨 𝙡𝙡𝙚𝙜𝙖𝙧 𝙖𝙡 𝙏𝙤𝙥 1!!`,`𝙈𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙢𝙖𝙨 𝙅𝙪𝙚𝙜𝙖𝙨 𝙩𝙪 𝙍𝙖𝙣𝙜𝙤 𝙩𝙖𝙢𝙗𝙞𝙚𝙣 𝙨𝙪𝙗𝙞𝙧𝙖!!`,`𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖 𝙚𝙣 𝙚𝙡 𝙢𝙤𝙙𝙤 𝙈𝙪𝙡𝙩𝙞𝙟𝙪𝙚𝙜𝙤𝙨 𝙮 𝙂𝙖𝙣𝙖 𝙧𝙚𝙘𝙤𝙢𝙥𝙚𝙣𝙨𝙖𝙨!!`])}`
            let c = `${usedPrefix}`
             let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
              let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
               let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                let emojis1 = `${pickRandom([`😃`,`😳`,`🤑`,`🤠`,`🤭`,`😇`,`😋`,`🥴`])}`
                 let emojis2 = `${pickRandom([`🕵🏻‍♀️`,`🕵🏽‍♀️`,`🕵🏻‍♂️`,`🕵🏾‍♂️`,`👩🏿‍⚕️`,`🧑🏿‍⚕️`,`👩🏻‍⚕️`,`🧑🏻‍⚕️`,`👩🏼‍⚕️`,`🧑🏼‍⚕️`,`👩🏻‍🍳`,`🧑🏽‍🍳`,`👩🏾‍🍳`,`🧑🏿‍🍳`,`👩🏻‍🎓`,`👩🏼‍🎓`,`🧑🏾‍🎓`,`🧑🏻‍🎓`,`👩🏿‍🚀`,`🧑🏾‍🚀`,`👩🏽‍🚀`,`🧑🏽‍🚀`,`👩🏻‍⚖️`,`🧑🏻‍⚖️`,`👩🏽‍⚖️`,`🧑🏾‍⚖️`,`👩🏼‍⚖️`,`🧑🏼‍⚖️`,`🧙🏾‍♀️`,`🧙🏾‍♂️`,`🧙🏻‍♀️`,`🧙🏻‍♂️`,`🧚🏻‍♀️`,`🧚🏻‍♂️`,`🧚🏿‍♀️`,`🧚🏿‍♂️`,`🧚🏽‍♀️`,`🧚🏽‍♂️`,`🧞‍♀️`,`🧞‍♂️`,`👩🏻‍🎨`,`👩🏼‍🎨`,`👩🏿‍🎨`,`🧑🏻‍🎨`,`🧑🏼‍🎨`,`🧑🏿‍🎨`])}`
                  let emojis3 = `${pickRandom([`🍑`,`🍒`,`🍕`,`🍡`,`🍨`,`🥧`,`🍜`,`🍛`,`🍫`,`🫒`,`🍆`,`🍩`,`🍪`,`🍿`])}`

           let sss = await `❍͜͡➣CHICA_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|YOVANI `

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴', url: 'https://youtu.be/aPu9wQi-z8U'}},
{index: 2, urlButton: {displayText: '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', url: 'https://www.facebook.com/groups/'}},
{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '.menu'}},
{index: 4, quickReplyButton: {displayText: '𝐄𝐒𝐓𝐀𝐃𝐎', id: '/estado'}},
{index: 5, quickReplyButton: {displayText: '𝐆𝐑𝐔𝐏𝐎𝐒 ️', id: '#grupos'}},
]
let ttt = {
text: sss,
footer: gata,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, ttt, m)
}
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].exp += 20
    let gata = `${pickRandom([`𝙀𝙡𝙞𝙟𝙚 𝙏𝙪 𝙀𝙢𝙤𝙟𝙞 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙤 𝙥𝙖𝙧𝙖 𝙅𝙪𝙜𝙖𝙧!!`,`𝘼𝙙𝙞𝙫𝙞𝙣𝙖 𝙚𝙡 𝙋𝙧𝙤𝙭𝙞𝙢𝙤 𝙅𝙪𝙚𝙜𝙤!!`,`𝘼𝙙𝙞𝙫𝙞𝙣𝙖 𝙚𝙡 𝙋𝙧𝙤𝙭𝙞𝙢𝙤 𝙅𝙪𝙚𝙜𝙤!!`,`𝙈𝙞𝙣𝙞𝙟𝙪𝙚𝙜𝙤𝙨 𝙚𝙨𝙩á𝙣 𝙚𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙚𝙣 𝙨𝙚𝙧 𝙅𝙪𝙜𝙖𝙙𝙤𝙨!!`])}`
                 let c = `${usedPrefix}`
                  let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
                   let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                    let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                     let emojis1 = `${pickRandom([`🎄`,`🌲`,`🌴`,`🌱`,`🌿`,`☘️`,`🍀`,`🍃`,`🍂`,`🍁`,`🍄`,`🌷`,`🌹`,`💐`,`🌼`,`🌻`,`🌺`,`🌸`])}`
                      let emojis2 = `${pickRandom([`❤️`,`🧡`,`💛`,`💚`,`💙`,`💜`,`🖤`,`💔`,`❤️‍🔥`,`❤️‍🩹`,`❣️`,`💕`,`💞`,`💓`,`💗`,`💖`,`💘`,`💝`])}`
                       let emojis3 = `${pickRandom([`🥊`,`🥋`,`🎣`,`🎊`,`🎉`,`🎈`,`✨`,`⭐`,`💫`,`🌟`,`🌈`,`🔥`,`💥`,`☃️`,`❄️`,`⛱️`,`🗿`,`🔮`])}`
         
                 let ssss = await `❍͜͡➣CHICA_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣ | CALABERA< <`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '.menu'}},
{index: 4, quickReplyButton: {displayText: '𝐄𝐒𝐓𝐀𝐃𝐎', id: '/estado'}},
{index: 5, quickReplyButton: {displayText: '𝐆𝐑𝐔𝐏𝐎𝐒 ️', id: '#grupos'}},
]
let tttt = {
text: ssss,
footer: `${gata}`,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
  
  
      
   if (command == 'juegos') { 
      global.db.data.users[m.sender].exp += 20
     let gata = `${pickRandom([`𝘾𝙖𝙧𝙜𝙖 𝙢𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝘽𝙤𝙩𝙤𝙣 𝙈𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨!!`,`𝘿𝙞𝙣𝙖𝙢𝙞𝙘𝙖𝙨, 𝙍𝙚𝙩𝙤𝙨, 𝘼𝙥𝙪𝙚𝙨𝙩𝙖𝙨, 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙮 𝙢𝙪𝙘𝙝𝙤 𝙢𝙖𝙨!!`])}`
                 let c = `${usedPrefix}`
                  let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                   let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                    let emojis1 = `${pickRandom([`🏳️`,`🏴`,`🏴‍☠️`,`🏁`,`🚩`,`🏳️‍🌈`,`🏳‍⚧`,`🇧🇷`,`🇨🇱`,`🇦🇷`,`🇧🇴`,`🇻🇪`,`🇭🇳`,`🇺🇾`,`🇨🇴`,`🇵🇪`,`🇵🇦`,`🇳🇮`,`🇬🇹`,`🇨🇺`,`🇨🇷`,`🇭🇹`,`🇩🇴`,`🇲🇽`,`🇸🇻`,`🇬🇾`,`🇺🇸`,`🇨🇦`,`🇱🇨`,`🇪🇨`])}`
                     let emojis2 = `${pickRandom([`🌁`,`🌉`,`🌌`,`🌃`,`🏙️`,`🌆`,`🌇`,`🎆`,`🎇`,`🌠`,`🌄`,`🌅`,`🏞️`,`🎑`,`🗾`,`🏜️`,`🏝️`,`🏖️`,`🗼`,`🗽`,`🗺️`,`🏗️`])}`
         
                 let ssss = await `❍͜͡➣CHICA_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|CALABERA`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '.menu'}},
{index: 4, quickReplyButton: {displayText: '𝐄𝐒𝐓𝐀𝐃𝐎', id: '/estado'}},
{index: 5, quickReplyButton: {displayText: '𝐆𝐑𝐔𝐏𝐎𝐒 ️', id: '#grupos'}},
]
let tttt = {
text: ssss,
footer: gata,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
 }
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['multijuegos', 'juegos']
handler.group = true
handler.limit = 1
export default handler
                              
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
