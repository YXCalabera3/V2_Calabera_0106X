let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βββγπΦΌ αΉπCalaberaπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββπΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©
ββWa.me/51926328073 (BOT)
ββWa.me/51926328073 (BOT) 
ββWa.me/51926328073 (CREADOR)
ββWa.me/51926328073 (CREADOR)
βββββΧβΧβΧβΧβββ
γ€`
let buttonMessage= {
'document': { url: `http://wa.me/51926328073` },
'mimetype': `application/${document}`,
'fileName': `πππ Chica Bot`,
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
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΎπ΅π² CALABERA'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(contacto|owner|creator|propietario|dueΓ±a|dueΓ±o|propietaria|dueΓ±o|creadora|creador)$/i
export default handler

