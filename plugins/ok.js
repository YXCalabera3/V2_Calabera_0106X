import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|si|OK|Si|si|ok amigo|gracias|gracias amigo|ok mano|ok|no|No|ok bro|Yes|yes/
handler.command = new RegExp
export default handler