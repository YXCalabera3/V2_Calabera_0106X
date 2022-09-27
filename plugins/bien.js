import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/bien_contestando.mp3'
conn.sendFile(m.chat, vn, 'bien_contestando.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(bien|Bien|bienn|bien|bien amigo|bien sobrino|bien bro|biem|bien)$/i
handler.fail = null
handler.exp = 100
export default handler