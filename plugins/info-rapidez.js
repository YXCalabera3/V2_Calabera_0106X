let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

await m.reply('1')
await m.reply('10')
await m.reply('20')
await m.reply('50')
await m.reply('60')
await m.reply('75')
await m.reply('85')
await m.reply('95')
await m.reply('100')
await m.reply(`â°â±ââ± *ððððððð¼ð¿ð | ðððððð* â±ââ±â®`)
 
let veloz = 
`ðVELOCIDAD:*\n *${speed}* *Milisegundos*\n\nð*SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'ð²ð°ð½ð°ð» ð³ð´ ðð¾ðððð±ð´', url: 'https://youtu.be/dfc4akKNn6A'}},
{index: 2, urlButton: {displayText: 'ð¥³ðð«ð®ð©ð¨ ðð ðððððð¨ð¨ð¤:', url: 'https://www.facebook.com/groups/https://imgur.com/ZrOq4nc.jpg/'}},
{index: 3, quickReplyButton: {displayText: 'ðððð', id: '#menu'}},
{index: 4, quickReplyButton: {displayText: 'ðððððð', id: '#estado'}},
{index: 5, quickReplyButton: {displayText: 'ðððð', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

  

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
handler.limit = 1
export default handler
