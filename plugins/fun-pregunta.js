let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}๐๐๐พ๐๐๐ฝ๐ผ ๐๐ ๐๐๐๐๐๐๐๐ผ ๐๐ผ๐๐ผ ๐๐๐ ๐๐๐๐๐๐๐ฟ๐๐ฟ๐ผ\n๐๐๐๐๐๐๐\n*${usedPrefix + command} Hoy va llover?*\n\n๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐ ๐ฝ๐ ๐ผ๐๐๐๐๐๐๐ฟ\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `
โโโใ๐๐๐๐๐๐๐๐ผ ใโ
โโ๐๐๐๐๐๐๐๐ผ | ๐๐๐๐๐๐๐๐
โ๏ธ ๐๐๐๐๐๐๐๐ผ
โโโโโืโืโืโืโ
โโ${text}
โโโ๐๐๐๐๐๐๐๐๐ผ | ๐๐๐๐๐๐๐๐ 
โโโโโืโืโืโืโ
โโ${['Si','Tal vez sรญ','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
โโ${vs}
โโโโโืโืโืโืโโ`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'โออกโฃChica Botโออกโฃ', null, null, [
['๐๐๐๐ ๐๐๐๐ง๐ฎ', `${usedPrefix + command} ${text}`],
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
handler.limit = 1
export default handler
