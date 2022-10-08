import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/amigo.mp3'
conn.sendFile(m.chat, vn, 'amigo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /amigo|hola amigo|Hola amigo|amigoo|amigooo|hol|hello|Hello|ola amigo/
handler.command = new RegExp
export default handler