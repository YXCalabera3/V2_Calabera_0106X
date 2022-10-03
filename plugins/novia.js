import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/novia.mp3'
conn.sendFile(m.chat, vn, 'novia.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /tienes novia|Tienes novia|novia|Tienes Novia|tienes enamorada|Tienes enamorada|estas soltero|tienes novia|Estas soltero|y tu enamorada/
handler.command = new RegExp
export default handler