let media = 'https://imgur.com/3CRSbeQ.jpg'
let handler = async (m, { conn, command }) => {
let str = `
βγβοΈCalabera Mlditaπ€γ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· πβ¨ HOLA TE ENVIAMOS UNIRTE AL LOSπ GRUPOS OFICIALES DEL BOT DEπ©βπ«β¨Chica Bot SOMOS UNA FAMILIA DE BOTS 
βββββΧβΧβΧβΧβββ
ββγChica_πππ:1γβ
ββhttps://chat.whatsapp.com/-----
βββββΧβΧβΧβΧβββ
ββγChica_πππ:2γβ
ββhttps://chat.whatsapp.com/-----
βββββΧβΧβΧβΧβββ
ββγπππππ_πππ:3 γβ
ββhttps://chat.whatsapp.com/-----
βββββΧβΧβΧβΧβββ`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/51926328073', 'π²ππ΄π°π³πΎπ', null, null, [
['ππππ', '/menu'],
['ππππππ ','/estado']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
