
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let sfoto = fs.readFileSync('./src/Menu2.jpg')
if (!text) throw `*⚠️ Ingrese el nombre del paquete de stickers que desea buscar.*`

let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
{await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
  let res = jsons.result.map((v, index) => `*🪴 • Resultado:* ${1 + index}\n*🌵 • Nombre:* ${v.title}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let buttonMessage= {
'document': { url: `Este repositorio es de la calabera maldita - consulte con el creador - Chica Bot` },
'mimetype': `application/${document}`,
'fileName': `⸽⃕𝚃𝚑𝚎 CHICA 𝙱𝙾𝚃 - MD🍁⃨፝⃕✰`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'Este repositorio es de la calabera maldita - consulte con el creador - Chica Bot',
'mediaType': 2,
'previewType': 'pdf',
'title': `• Resultados Encontrados🔎`,
'body': global.author,
'thumbnail': sfoto,
'sourceUrl': 'https//wa.me/51926328073'}},
'caption': res,
'footer': '• *Si desea descargar un*\n*paquete de sticker escriba*\n*/stickerpack <URL>*',
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menú 📒'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info 📌'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}

handler.tags = ['search']
handler.command = handler.help = ['stickersearch', 'searchsticker']
handler.limit = 2
export default handler
