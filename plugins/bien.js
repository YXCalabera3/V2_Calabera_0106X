import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/bien.mp3'
conn.sendFile(m.chat, vn, 'bien.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bien|Bien|bien amigo|bien|bien y tu|bien sobrino/
handler.command = new RegExp
export default handler