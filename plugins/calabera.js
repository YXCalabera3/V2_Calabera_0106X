let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/calabera.mp3'
conn.sendFile(m.chat, vn, 'calabera.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /calabera|Calabera|calaberita|calabera|calaberita|Calavera/
handler.command = new RegExp
module.exports = handler
