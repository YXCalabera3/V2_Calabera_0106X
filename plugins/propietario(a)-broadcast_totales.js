import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
conn.sendButton(id, `βββγπΎππππππΎπΌπΏπ | πππππΎπγβ\nββπ* ${text}\n*\nβββββΧβΧβΧβΧβββ`, 'β *πΎππππππΎπΌπΏπ ππππΎππΌπ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentasgb'],['ππππ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'βΝΝ‘β£CHICA_πππβΝΝ‘β£|CALABERA ',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram`, 
thumbnail: fs.readFileSync('./src/admins.jpg') }}})}
m.reply(`${iig} β *El mensaje fue enviado a ${chatsall.length} Chats Totales*\n*Es posible que no se haya enviado a todos los Chats Totales. Disculpe.*\n\nβ *The message was sent to ${chatsall.length} Totals Chats*\n*May not have been sent to all Totals Chats. Excuse me.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.limit = 1
handler.exp = 500
export default handler
