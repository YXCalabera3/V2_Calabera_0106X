import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=9b817532fadff8fc7cb86862')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'π²π·πΈπ²π° π²πππ΄', wm, json.result.female, [['βοΈππΈπΆππΈπ΄π½ππ΄βΆοΈ', `/${command}`]], m)
conn.sendButton(m.chat, 'π²π·πΈπ²πΎ π²πππ΄', wm, json.result.male, [['βοΈππΈπΆππΈπ΄π½ππ΄βΆοΈ', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
handler.limit = 1
export default handler
