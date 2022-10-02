let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/sobrino.mp3'
conn.sendFile(m.chat, vn, 'sobrino.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /sobrino|Sobrino|Sobrina|sobrina|Sobrinoo|sobrinooo/
handler.command = new RegExp
module.exports = handler
