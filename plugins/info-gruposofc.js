let media = 'https://imgur.com/3CRSbeQ.jpg'
let handler = async (m, { conn, command }) => {
let str = `
┌「☄️Calabera Mldita🤖」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS UNIRTE AL LOS💖 GRUPOS OFICIALES DEL BOT DE👩‍🏫✨Chica Bot SOMOS UNA FAMILIA DE BOTS 
└────ׂ─ׂ─ׂ─ׂ───
┌─「Chica_𝐁𝐎𝐓:1」─
├❏https://chat.whatsapp.com/-----
└────ׂ─ׂ─ׂ─ׂ───
┌─「Chica_𝐁𝐎𝐓:2」─
├❏https://chat.whatsapp.com/-----
└────ׂ─ׂ─ׂ─ׂ───
┌─「𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:3 」─
├❏https://chat.whatsapp.com/-----
└────ׂ─ׂ─ׂ─ׂ───`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/51926328073', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎 ','/estado']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
