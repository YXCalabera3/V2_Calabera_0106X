import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://imgur.com/ZrOq4nc.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββπ©βπ«π½πΎπΌπ±ππ΄: ${username} ${registered ? '(' + name + ') ': ''}
βββ¨π½ππΌπ΄ππΎ: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
ββπͺπ»πΈπ½πΊ: wa.me/${who.split`@`[0]}${registered ? '\nββπ΄π³π°π³:* ' + age + ' aΓ±os' : ''}
ββπ»πΈπΌπΈππ΄: ${limit} πππΎπ
βββπ»ππ΄πΆπΈππππ°π³πΎ: ${registered ? 'Si': 'No'}
ββπΏππ΄πΌπΈππΌ: ${prem ? 'Si' : 'No'}
ββπ½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄: ${sn}
βββββΧβΧβΧβΧβββ`
conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['ππππ', '#menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
