import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let mystic = json.url
conn.sendButton(m.chat, `_Navidad π§βπ_`, author, mystic, [['βοΈππΈπΆππΈπ΄π½ππ΄βΆοΈ', `/${command}`]], m)
}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
handler.limit = 1
export default handler
