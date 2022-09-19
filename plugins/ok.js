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
handler.customPrefix = /ok|OK|ya|Ya|ven|si|Si|siii|no|No|nooo|noo|Noo|gracias|Yes|ok|Ok bro|ok vale|Ok vale|gracias|Ok|si|graciass|Gracias bro|gracias bro|Ok|ok primo|gracias|Gracias|ok bro|ok/
handler.command = new RegExp
export default handler

