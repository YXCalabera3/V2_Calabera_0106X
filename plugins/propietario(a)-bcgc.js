import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `βγπΎππππππΎπΌπΏπ | πππππΎπγβ\nββπ${text}\nβββββΧβΧβΧβΧβββ`, 'β *πΎππππππΎπΌπΏπ ππππΎππΌπ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['ππππππ', '.estado'],['οΈππππ', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: 'βΝΝ‘β£CALABERA_πππβΝΝ‘β£|CHICA ',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram`, 
thumbnail: fs.readFileSync('./src/admins.jpg') }}})}
m.reply(`${iig} β *El mensaje fue enviado a ${groups.length} Grupo(s)*\n*Es posible que no se haya enviado a todos los Grupos. Disculpe.*\n\nβ *The message was sent to ${groups.length} Group's*\n*May not have been sent to all Groups. Excuse me.*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicargrupo|comunicadogrupo|comunicargrupos|comunicadogrupos|broadcastgc|bcgc)$/i
handler.rowner = true
handler.exp = 500
handler.limit = 1
//handler.owner = true
export default handler
