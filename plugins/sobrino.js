import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/sobrino.mp3'
conn.sendFile(m.chat, vn, 'sobrino.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /sobrino|Sobrino|sobrina|sobrino/
handler.command = new RegExp
export default handler