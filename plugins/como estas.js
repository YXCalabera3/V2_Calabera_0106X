import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/como_estas.mp3'
conn.sendFile(m.chat, vn, 'como_estas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /como estas|cómo estas|Cómo estas|Cómo Estas|Como estass|como stas|Como estas|Q tal|como estas|q tal|como stas/
handler.command = new RegExp
export default handler