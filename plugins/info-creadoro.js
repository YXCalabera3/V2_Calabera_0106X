let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌──「𓈃ּ ៹🍏Calabera𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩
├❏Wa.me/51926328073 (BOT)
├❏Wa.me/51926328073 (BOT) 
├❏Wa.me/51926328073 (CREADOR)
├❏Wa.me/51926328073 (CREADOR)
└────ׂ─ׂ─ׂ─ׂ───
ㅤ`
let buttonMessage= {
'document': { url: `http://wa.me/51926328073` },
'mimetype': `application/${document}`,
'fileName': `𝚃𝚑𝚎 Chica Bot`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/51926328073',
'mediaType': 2,
'previewType': 'pdf',
'title': 'http://wa.me/51926328073',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙾𝙵𝙲 CALABERA'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(contacto|owner|creator|propietario|dueña|dueño|propietaria|dueño|creadora|creador)$/i
export default handler

