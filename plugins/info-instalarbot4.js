let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://imgur.com/ZrOq4nc.jpg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
✔️Hola 😉 ya hay una solución para los botones  para termux🕋*
└────ׂ─ׂ─ׂ─ׂ───
┌「🌱Si usas mi bot o mi bot editado pues usar mi archivo de mi bot de la carpeta de node_modules❄️*
└────ׂ─ׂ─ׂ─ׂ───
┌「☘️Si quieres que te funcione en otro bot usa mi carpeta de mi bot de node_modules🍃*
└────ׂ─ׂ─ׂ─ׂ───
┌「NÚMERO DEL CREADOR 」
├❏http://wa.me/51926328073
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝙴𝚁𝙼𝚄𝚇」
├❏https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇」
├❏pkg update && pkg upgrade
├❏pkg install git -y
├❏pkg install nodejs -y
├❏pkg install ffmpeg -y
├❏pkg install imagemagick -y
├❏termux-setup-storage
├❏cd storage/downloads/nombre
├❏npm install
├❏ls
├❏npm update
├❏npm start
└────ׂ─ׂ─ׂ─ׂ───
┌「☘️Funciona bien esto es temporal hasta que salga una nueva versión de baileys ya que la versión "^4.4.0", aún no funciona para los botones💎
└────ׂ─ׂ─ׂ─ׂ───`
let buttonMessage= {
'document': { url: `http://wa.me/51926328073` },
'mimetype': `application/${document}`,
'fileName': `𝚃𝚑𝚎 CHICA 𝙱𝙾𝚃`,
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
handler.command = /^(termux|termux)$/i
export default handler

