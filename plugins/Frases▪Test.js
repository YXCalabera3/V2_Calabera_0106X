import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let res = await fetch("https://api.zacros.my.id/randomtext/fml")
let json = await res.json()
let { result } = json
conn.reply(m.chat, `┌「𓈃ּ ៹🍏Chica Bot𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」\n├❏🌌 ${result}\n└────ׂ`, m)}
handler.command = /^(frasetest)$/i
handler.limit = 1
export default handler